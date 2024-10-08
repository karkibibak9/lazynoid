'use client'
import { useState } from 'react'
import axios from 'axios'
import crypto from 'crypto'

const HaveIBeenPwned = () => {
  const [password, setPassword] = useState<string>('')
  const [breaches, setBreaches] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const checkBreaches = async () => {
    setLoading(true)
    setError(null)
    setBreaches(null)

    try {
      // Hash the password using SHA-1
      const hashedPassword = crypto.createHash('sha1').update(password).digest('hex').toUpperCase()
      const prefix = hashedPassword.slice(0, 5)
      const suffix = hashedPassword.slice(5)

      // Call the API with the prefix
      const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`)

      // Check if the suffix is in the response
      const lines = response.data.split('\n')
      const foundLine = lines.find((line: string) => line.startsWith(suffix))

      if (foundLine) {
        const [_, count] = foundLine.split(':')
        setBreaches(parseInt(count, 10))
      } else {
        setBreaches(0)
      }
    } catch (err) {
      setError('An error occurred while checking the password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-4 shadow-md dark:bg-gray-500">
      <h2 className="mb-4 text-2xl font-bold">Check if your password has been pwned</h2>
      <input
        type="password"
        className="mb-4 w-full rounded border p-2 dark:text-black"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full rounded bg-blue-500 p-2 text-white"
        onClick={checkBreaches}
        disabled={loading}
      >
        {loading ? 'Checking...' : 'Check'}
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {breaches !== null && (
        <div className="mt-4">
          {breaches > 0 ? (
            <p className="text-red-500">This password has been seen {breaches} times before.</p>
          ) : (
            <p className="text-green-500">This password has not been pwned.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default HaveIBeenPwned
