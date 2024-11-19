"use client"
import { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';

const QrScanner = ({ onScanResult }) => {
  const [result, setResult] = useState('');
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');

  useEffect(() => {
    const getDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
      if (videoDevices.length > 0) {
        setSelectedDeviceId(videoDevices[0].deviceId);
      }
    };

    getDevices();
  }, []);

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
      <select onChange={(e) => setSelectedDeviceId(e.target.value)} value={selectedDeviceId}>
        {devices.map((device, index) => (
          <option key={index} value={device.deviceId}>
            {device.label || `Camera ${index + 1}`}
          </option>
        ))}
      </select>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        constraints={{ video: { deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined } }}
      />
      <p>{result}</p>
    </div>
  );
};

export default QrScanner;