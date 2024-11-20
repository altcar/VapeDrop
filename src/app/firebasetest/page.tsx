
"use client";
import { useMediaDevices } from "react-media-devices";
import { useZxing } from "react-zxing";

const constraints: MediaStreamConstraints = {
  video: true,
  audio: false,
};

const QrCodeGenerator = () => {
  const { devices } = useMediaDevices({ constraints });
  const deviceId = devices?.[0]?.deviceId;
  const { ref,
    torch: { on, off, isOn, isAvailable }, } = useZxing({
      paused: !deviceId,
      deviceId,
    });

  return (
    <>
  <ul>
          {devices?.map((device) => (
          <li key={device.id}>{device.label}</li>
        ))}
      </ul>
      {isAvailable ? (
        <button onClick={() => (isOn ? off() : on())}>
          {isOn ? "Turn off" : "Turn on"} torch
        </button>
      ) : (
        <strong>Unfortunately, torch is not available on this device.</strong>
      )}
      <video ref={ref} className="h-[500px]" />
    </>
  );
};
export default QrCodeGenerator;