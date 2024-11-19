"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { QRCodeSVG } from 'qrcode.react';
import QrScanner from '@/app/component/qrscanner';

const QrCodeGenerator = () => {
  const [text, setText] = useState('hello');
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState('');


  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');
  const [cameraPermission, setCameraPermission] = useState(null);
  // useEffect(() => {
  //   console.log(selectedDeviceId);
  // }, [selectedDeviceId]);
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



    async function checkCameraPermission() {
      try {
        const permissionStatus = await navigator.permissions.query({ name: 'camera' });
        setCameraPermission(permissionStatus.state);
        if (permissionStatus.state === 'granted') detectcamera();
        permissionStatus.onchange = () => {
          if (permissionStatus.state === 'granted') detectcamera();
          setCameraPermission(permissionStatus.state);
        };
      } catch (error) {
        console.error("Error checking camera permission:", error);
      }
    }

    checkCameraPermission();
  }, []);

  const handleScanResult = (data) => {
    // Process the scan result here
    console.log('Scanned data:', data);
    setScanResult(data);
  };
  return (
    <>
      <div className="mx-[20px] mt-8">
        <Link href="/" className="w-[40px] h-[40px] border-2 border-white rounded-full flex justify-center items-center ml-3"> <Image src="/hamburger (1).svg" width={40} height={40} alt="account" className="rotate-90 "></Image>
        </Link>

        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-[300px] h-[300px] bg-white min-h-[200px]">
            {scan && <QRCodeSVG value="https://reactjs.org/" className="w-[90%] h-full mx-auto" />}
            {!scan && (<QrScanner onScanResult={handleScanResult} constrit={{ video: { deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined } }} />)}
          </div>
        </div>
        <select onChange={(e) => setSelectedDeviceId(e.target.value)} value={selectedDeviceId}>
          {devices.map((device, key) => (
            <option value={device.deviceId} key={key}>
              {device.label || `Device ${key + 1}`}
            </option>
          ))}
        </select> <p>Scan Result: {scanResult}</p>
        <div className="flex flex-row w-full [&>*]:mx-3 [&>*]:h-[45px]">
          <div className={`${!scan && ("!bg-white !text-black")} bg-transparent text-white flex justify-center items-center rounded-lg w-full border-2`} onClick={() => { setScan(false) }}>Scan</div>
          <div className={`${scan && ("!bg-white !text-black")} bg-transparent text-white flex justify-center items-center rounded-lg w-full border-2`} onClick={() => { setScan(true) }}>Your QR</div>
        </div>
      </div>
    </>
  );
}

export default QrCodeGenerator;