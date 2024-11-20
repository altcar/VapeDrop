import { useMediaDevices } from "react-media-devices";
import { useZxing } from "react-zxing";
import { useState } from "react";

const constraints: MediaStreamConstraints = {
  video: true,
  audio: false,
};

const BarcodeScanner = () => {
  
  const [result, setResult] = useState("");

  const { devices } = useMediaDevices({ constraints });
  const videoInputDevices = devices?.filter(device => device.kind === 'videoinput');
  const [deviceId, setdeviceId] = useState(videoInputDevices?.[0]?.deviceId);
  console.log(devices);
  const { ref,
    torch: { on, off, isOn, isAvailable }, } = useZxing({
      paused: !deviceId,
      deviceId,
      onDecodeResult(result) {
        setResult(result.getText());
        alert(result.getText());
        window.location.href = "/";
      },  
      constraints: { video: { facingMode: 'environment' }, audio: false }
    });

    const changeDeviceId = (id: string) => {
      setdeviceId(id);
      console.log(`Device ID changed to: ${id}`);
    };
  return (
    <>
      <ul>
        {devices?.map((device) => (
          <li key={device.deviceId} onClick={() => changeDeviceId(device.deviceId)}>{device.label}</li>
        ))}
      </ul>
      {isAvailable ? (
        <button onClick={() => (isOn ? off() : on())}>
          {isOn ? "Turn off" : "Turn on"} torch
        </button>
      ) : (
        <strong>Unfortunately, torch is not available on this device.</strong>
      )}
      <video key={deviceId} ref={ref} className="h-full" />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};
export default BarcodeScanner;