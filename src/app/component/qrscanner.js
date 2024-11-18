"use client"
import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
import { QrReader } from 'react-qr-reader';

// const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const QrScanner = ({ onScanResult, constrit }) => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      if (onScanResult) {
        onScanResult(data);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        constraints={constrit}
      />
      {/* <p>{result}</p> */}
    </div>
  );
};

export default QrScanner;