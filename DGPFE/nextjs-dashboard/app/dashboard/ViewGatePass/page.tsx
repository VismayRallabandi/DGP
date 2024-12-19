'use client'
import { useState, useEffect } from 'react';
import withAuth from '@/app/components/withAuth';
const PdfViewerPage = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [serialNumber, setSerialNumber] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [gatePasses, setGatePasses] = useState<any[]>([]);

  const iframeStyle = {
    width: '100%',
    height: '800px',
    border: 'none',
    transform: 'rotate(0deg)',
    transformOrigin: 'center',
  };

  useEffect(() => {
    fetch('http://localhost:3000/forms/gate-passes')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched Gate Passes:', data);
        setGatePasses(data);
      })
      .catch((error) => console.error('Error fetching gate passes:', error));
  }, []);
  const fetchPdf = async () => {
    try {
      setError(null);
      const response = await fetch(`http://localhost:3000/forms/${serialNumber}/pdf`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob) + '#rotation=90&view=FitH';
      setPdfUrl(url);
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching the PDF');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Serial Number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          className="border px-4 py-2 rounded-md mr-2"
        />
        <button
          onClick={fetchPdf}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Fetch PDF
        </button>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          style={iframeStyle}
        />
      ) : (
        <p>No PDF loaded</p>
      )}

  <div className="overflow-x-auto mt-4">
    <table className="min-w-full table-auto border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">Serial Number</th>
          <th className="border-b p-2 text-left">Building Name</th>
          <th className="border-b p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {gatePasses.length > 0 ? (
          gatePasses.map((gatePass) => (
            <tr key={gatePass.serialNumber}>
              <td className="border-b p-2">{gatePass.serialNumber}</td>
              <td className="border-b p-2">{gatePass.buildingName}</td>
              <td className="border-b p-2">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  gatePass.approved 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {gatePass.approved ? 'Approved' : 'Pending'}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="border-b p-2 text-center">No Gate Passes Found</td>
          </tr>
        )}
      </tbody>
          </table>
        </div>
      </div>
  );
};

export default withAuth(PdfViewerPage);
