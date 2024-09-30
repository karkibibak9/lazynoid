 'use client'

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
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">Network Speed Test</h1>
      <div
        className={`bg-white shadow-lg rounded-lg p-6 transition-transform duration-500 ease-in-out ${
          loading ? 'animate-spin' : 'transform-none'
        }`}
      >
        {loading ? (
          <div className="flex flex-col items-center">
            <p className="text-lg">Loading...</p>
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