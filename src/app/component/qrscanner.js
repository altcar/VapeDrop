"use client"
import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
import { QrReader } from 'react-qr-reader';

// const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const QrScanner = ({ onScanResult, deviceid }) => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      if (onScanResult) {
        onScanResult(data);
      }
    }
  };

  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');

  useEffect(() => {
    function detectcamera() {
      navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
        const videoDevices = mediaDevices.filter(({ kind }) => kind === 'videoinput');
        setDevices(videoDevices);
        if (videoDevices.length > 0) {
          const backCamera = videoDevices.find(device => device.label.toLowerCase().includes('back') || device.label.toLowerCase().includes('rear'));
          setSelectedDeviceId(backCamera ? backCamera.deviceId : videoDevices[0].deviceId);
        }
      });
    }

  }, []);

  const handleError = (err) => {
    console.error(err);
  };
  useEffect(() => {
    console.log(deviceid);
  }, [deviceid]);
  return (
    <div>
      <select onChange={(e) => setSelectedDeviceId(e.target.value)} value={selectedDeviceId}>
          {devices.map((device, key) => (
            <option value={device.deviceId} key={key}>
              {device.label || `Device ${key + 1}`}
            </option>
          ))}
        </select> <p>Scan Result: {scanResult}</p>
      <QrReader
        key={deviceid} // Add key prop to force re-render
        delay={300}
        onResult={(result, error) => {
          if (!!result) handleScan(result);
          if (!!error) handleError(error);
        }}
        constraints={{ deviceId: deviceid ? deviceid : undefined, facingMode: 'environment' }}
      />
      <p>{result}</p>
    </div>
  );
};

export default QrScanner;