'use client'

// app/components/SpeedTest.tsx
import React, { useState } from 'react'
import { useTheme } from 'next-themes'

const SpeedTest: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [downloadSpeed, setDownloadSpeed] = useState<string | null>(null)
  const [uploadSpeed, setUploadSpeed] = useState<string | null>(null)
  const { theme } = useTheme() // Use the theme context

  const handleSpeedTest = () => {
    setLoading(true)
    // Mock speed test logic
    const mockDownload = Math.random() * 100 // Mock download speed in Mbps
    const mockUpload = Math.random() * 50 // Mock upload speed in Mbps

    setTimeout(() => {
      setDownloadSpeed(mockDownload.toFixed(2)) // Set download speed
      setUploadSpeed(mockUpload.toFixed(2)) // Set upload speed
      setLoading(false) // Stop loading
    }, 2000)
  }

  // Define theme-specific styles
  const containerClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
  const buttonClass =
    theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'

  return (
    <div className={`flex h-screen flex-col items-center justify-center ${containerClass}`}>
      <h1 className="mb-4 text-2xl font-bold">Network Speed Test</h1>
      <div
        className={`rounded-lg bg-gray-500 p-6 shadow-lg transition-transform duration-500 ease-in-out ${
          loading ? 'animate-spin' : 'transform-none'
        } ${containerClass}`}
      >
        {loading ? (
          <div className="flex flex-col items-center ">
            <p className="text-lg">Loading...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button
              onClick={handleSpeedTest}
              className={`mb-4 rounded px-4 py-2 text-white ${buttonClass}`}
            >
              Start Speed Test
            </button>
            {downloadSpeed && <p className="mt-4">Download Speed: {downloadSpeed} Mbps</p>}
            {uploadSpeed && <p className="mt-4">Upload Speed: {uploadSpeed} Mbps</p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default SpeedTest
