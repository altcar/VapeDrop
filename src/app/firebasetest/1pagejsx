"use client";
    
    // onChange={(e) => setOrigin(e.target.value)}
    import dynamic from 'next/dynamic';

import React, { useState, useEffect } from 'react';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const Test = (props) => {
  const [data, setData] = useState('No result');
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
      const videoDevices = mediaDevices.filter(({ kind }) => kind === 'videoinput');
      setDevices(videoDevices);
      if (videoDevices.length > 0) {
        const backCamera = videoDevices.find(device => device.label.toLowerCase().includes('back') || device.label.toLowerCase().includes('rear'));
        setSelectedDeviceId(backCamera ? backCamera.deviceId : videoDevices[0].deviceId);
      }
    });
  }, []);

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ video: { deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined } }}
        className="w-full"
      />
      <p>{data}</p>
      <select onChange={(e) => setSelectedDeviceId(e.target.value)} value={selectedDeviceId}>
        {devices.map((device, key) => (
          <option value={device.deviceId} key={key}>
            {device.label || `Device ${key + 1}`}
          </option>
        ))}
      </select>
    </>
  );
};
    
export default Test;

  //   useEffect(() => {
  //     navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
  //       const videoDevices = mediaDevices.filter(({ kind }) => kind === 'videoinput');
  //       setDevices(videoDevices);
  //       if (videoDevices.length > 0) {
  //         const backCamera = videoDevices.find(device => device.label.toLowerCase().includes('back') || device.label.toLowerCase().includes('rear'));
  //         setSelectedDeviceId(backCamera ? backCamera.deviceId : videoDevices[0].deviceId);
  //       }
  //     });
  //   }, []);
  //   <select onChange={(e) => setSelectedDeviceId(e.target.value)} value={selectedDeviceId}>
  //   {devices.map((device, key) => (
  //     <option value={device.deviceId} key={key}>
  //       {device.label || `Device ${key + 1}`}
  //     </option>
  //   ))}
  // </select>
  //  constraints={{ video: { deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined } }}