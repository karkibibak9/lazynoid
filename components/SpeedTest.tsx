'use client'

'use client'

import React, { useState } from 'react'

const SpeedTest: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [downloadSpeed, setDownloadSpeed] = useState<string | null>(null)
  const [uploadSpeed, setUploadSpeed] = useState<string | null>(null)
  const [ping, setPing] = useState<string | null>(null)
  const [latency, setLatency] = useState<string | null>(null)

  const handleSpeedTest = () => {
    setLoading(true)
    const samples = 10
    const sampleInterval = 1500 // 1.5 seconds interval for each sample
    const downloadSpeeds: number[] = []
    const uploadSpeeds: number[] = []
    const pings: number[] = []
    const latencies: number[] = []

    const takeSample = (sampleCount: number) => {
      if (sampleCount >= samples) {
        setDownloadSpeed((downloadSpeeds.reduce((a, b) => a + b, 0) / samples).toFixed(2))
        setUploadSpeed((uploadSpeeds.reduce((a, b) => a + b, 0) / samples).toFixed(2))
        setPing((pings.reduce((a, b) => a + b, 0) / samples).toFixed(2))
        setLatency((latencies.reduce((a, b) => a + b, 0) / samples).toFixed(2))
        setLoading(false)
        return
      }

      const mockDownload = Math.random() * 100 // Mock download speed in Mbps
      const mockUpload = Math.random() * 50 // Mock upload speed in Mbps
      const mockPing = Math.random() * 50 // Mock ping in ms
      const mockLatency = Math.random() * 100 // Mock latency in ms

      downloadSpeeds.push(mockDownload)
      uploadSpeeds.push(mockUpload)
      pings.push(mockPing)
      latencies.push(mockLatency)

      // Update UI with current averages
      setDownloadSpeed((downloadSpeeds.reduce((a, b) => a + b, 0) / (sampleCount + 1)).toFixed(2))
      setUploadSpeed((uploadSpeeds.reduce((a, b) => a + b, 0) / (sampleCount + 1)).toFixed(2))
      setPing((pings.reduce((a, b) => a + b, 0) / (sampleCount + 1)).toFixed(2))
      setLatency((latencies.reduce((a, b) => a + b, 0) / (sampleCount + 1)).toFixed(2))

      setTimeout(() => takeSample(sampleCount + 1), sampleInterval)
    }

    takeSample(0)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <h1 className="my-6 mb-4 text-2xl font-bold">Network Speed Test</h1>
      <div className="rounded-lg bg-gray-200 p-6 shadow-lg dark:bg-gray-800">
        {loading ? (
          <div className="flex flex-col items-center">
            <p className="text-lg">Loading...</p>
            {downloadSpeed && <p className="mt-4">Download Speed: {downloadSpeed} Mbps</p>}
            {uploadSpeed && <p className="mt-4">Upload Speed: {uploadSpeed} Mbps</p>}
            {ping && <p className="mt-4">Ping: {ping} ms</p>}
            {latency && <p className="mt-4">Latency: {latency} ms</p>}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button
              onClick={handleSpeedTest}
              className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              Start Speed Test
            </button>
            {downloadSpeed && <p className="mt-4">Download Speed: {downloadSpeed} Mbps</p>}
            {uploadSpeed && <p className="mt-4">Upload Speed: {uploadSpeed} Mbps</p>}
            {ping && <p className="mt-4">Ping: {ping} ms</p>}
            {latency && <p className="mt-4">Latency: {latency} ms</p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default SpeedTest

// import React, { useState } from 'react'
// import { useTheme } from 'next-themes'

// const SpeedTest: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false)
//   const [downloadSpeed, setDownloadSpeed] = useState<string | null>(null)
//   const [uploadSpeed, setUploadSpeed] = useState<string | null>(null)
//   const [ping, setPing] = useState<string | null>(null)
//   const [latency, setLatency] = useState<string | null>(null)
//   const { theme } = useTheme() // Use the theme context

//   const handleSpeedTest = () => {
//     setLoading(true)
//     const samples = 10
//     const sampleInterval = 1500 // 1 second interval for each sample
//     const downloadSpeeds: number[] = []
//     const uploadSpeeds: number[] = []
//     const pings: number[] = []
//     const latencies: number[] = []

//     const takeSample = (sampleCount: number) => {
//       if (sampleCount >= samples) {
//         setDownloadSpeed((downloadSpeeds.reduce((a, b) => a + b, 0) / samples).toFixed(2))
//         setUploadSpeed((uploadSpeeds.reduce((a, b) => a + b, 0) / samples).toFixed(2))
//         setPing((pings.reduce((a, b) => a + b, 0) / samples).toFixed(2))
//         setLatency((latencies.reduce((a, b) => a + b, 0) / samples).toFixed(2))
//         setLoading(false)
//         return
//       }

//       const mockDownload = Math.random() * 100 // Mock download speed in Mbps
//       const mockUpload = Math.random() * 50 // Mock upload speed in Mbps
//       const mockPing = Math.random() * 50 // Mock ping in ms
//       const mockLatency = Math.random() * 100 // Mock latency in ms

//       downloadSpeeds.push(mockDownload)
//       uploadSpeeds.push(mockUpload)
//       pings.push(mockPing)
//       latencies.push(mockLatency)

//       // Update UI with current averages
//       setDownloadSpeed((downloadSpeeds.reduce((a, b) => a + b, 0) / (sampleCount + 1)).toFixed(2))
//       setUploadSpeed((uploadSpeeds.reduce((a, b) => a + b, 0) / (sampleCount + 1)).toFixed(2))
//       setPing((pings.reduce((a, b) => a + b, 0) / (sampleCount + 1)).toFixed(2))
//       setLatency((latencies.reduce((a, b) => a + b, 0) / (sampleCount + 1)).toFixed(2))

//       setTimeout(() => takeSample(sampleCount + 1), sampleInterval)
//     }

//     takeSample(0)
//   }

//   // Define theme-specific styles
//   const containerClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
//   const buttonClass =
//     theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'

//   return (
//     <div className={`justify-top flex h-screen flex-col items-center ${containerClass}`}>
//       <h1 className="my-6 mb-4 p-5 text-2xl font-bold">Network Speed Test</h1>
//       <div className={`rounded-lg bg-gray-500 p-6 shadow-lg ${containerClass}`}>
//         {loading ? (
//           <div className="flex flex-col items-center">
//             <p className="text-lg">Loading...</p>
//             {downloadSpeed && <p className="mt-4">Download Speed: {downloadSpeed} Mbps</p>}
//             {uploadSpeed && <p className="mt-4">Upload Speed: {uploadSpeed} Mbps</p>}
//             {ping && <p className="mt-4">Ping: {ping} ms</p>}
//             {latency && <p className="mt-4">Latency: {latency} ms</p>}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center">
//             <button
//               onClick={handleSpeedTest}
//               className={`mb-4 rounded px-4 py-2 text-white ${buttonClass}`}
//             >
//               Start Speed Test
//             </button>
//             {downloadSpeed && <p className="mt-4">Download Speed: {downloadSpeed} Mbps</p>}
//             {uploadSpeed && <p className="mt-4">Upload Speed: {uploadSpeed} Mbps</p>}
//             {ping && <p className="mt-4">Ping: {ping} ms</p>}
//             {latency && <p className="mt-4">Latency: {latency} ms</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default SpeedTest
