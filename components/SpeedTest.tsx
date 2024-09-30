 "use client"

// app/components/SpeedTest.tsx
import React, { useState } from 'react';

const SpeedTest: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [downloadSpeed, setDownloadSpeed] = useState<string | null>(null);
  const [uploadSpeed, setUploadSpeed] = useState<string | null>(null);

  const handleSpeedTest = () => {
    setLoading(true);
    // Mock speed test logic
    const mockDownload = Math.random() * 100; // Mock download speed in Mbps
    const mockUpload = Math.random() * 50; // Mock upload speed in Mbps

    setTimeout(() => {
      setDownloadSpeed(mockDownload.toFixed(2)); // Set download speed
      setUploadSpeed(mockUpload.toFixed(2)); // Set upload speed
      setLoading(false); // Stop loading
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Network Speed Test</h1>
      <div
        className={`bg-white shadow-lg rounded-lg p-6 transition-transform duration-500 ease-in-out ${
          loading ? 'animate-spin' : 'transform-none'
        }`}
      >
        {loading ? (
          <div className="flex flex-col items-center">
            <p className="text-lg">Loading...😂</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button
              onClick={handleSpeedTest}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
            >
              Start Speed Test
            </button>
            {downloadSpeed && (
              <p className="mt-4">Download Speed: {downloadSpeed} Mbps</p>
            )}
            {uploadSpeed && (
              <p className="mt-4">Upload Speed: {uploadSpeed} Mbps</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeedTest;






// // app/components/SpeedTest.tsx
// import React, { useState } from 'react';

// const SpeedTest: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [downloadSpeed, setDownloadSpeed] = useState<string | null>(null);
//   const [uploadSpeed, setUploadSpeed] = useState<string | null>(null);

//   const handleSpeedTest = () => {
//     setLoading(true);
//     // Mock speed test logic
//     const mockDownload = Math.random() * 100; // Mock download speed in Mbps
//     const mockUpload = Math.random() * 50; // Mock upload speed in Mbps

//     setTimeout(() => {
//       setDownloadSpeed(mockDownload.toFixed(2)); // Set download speed
//       setUploadSpeed(mockUpload.toFixed(2)); // Set upload speed
//       setLoading(false); // Stop loading
//     }, 2000);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//   <h1 className="text-2xl font-bold mb-4">Network Speed Test</h1>
//   <button
//     onClick={handleSpeedTest}
//     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//   >
//     {loading ? 'Testing...' : 'Start Speed Test'}
//   </button>
//   {loading && (
//     <div className="flex flex-col items-center mt-4">
//       <div className="loader"></div>
//       <p className="mt-2">Testing network speed...</p>
//     </div>
//   )}
//   {downloadSpeed && (
//     <p className="mt-4">Download Speed: {downloadSpeed} Mbps</p>
//   )}
//   {uploadSpeed && (
//     <p className="mt-4">Upload Speed: {uploadSpeed} Mbps</p>
//   )}
//   <style jsx>{`
//     .loader {
//       border: 8px solid rgba(255, 255, 255, 0.3);
//       border-top: 8px solid #007bff;
//       border-radius: 50%;
//       width: 40px;
//       height: 40px;
//       animation: spin 1s linear infinite;
//     }
  
//     @keyframes spin {
//       0% {
//         transform: rotate(0deg);
//       }
//       100% {
//         transform: rotate(360deg);
//       }
//     }
//   `}</style>
// </div>


//   );
// };

// export default SpeedTest;
