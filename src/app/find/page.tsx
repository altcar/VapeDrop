"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Map from "../component/map";
import Hotspot from "../component/webstuff/hotspot";
import Link from "next/link";

export default function Home() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  // const [error, setError] = useState(null);
  useEffect(() => {
    // getUserLocation(setLocation, setError);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Handle position data here
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error(`Geolocation error: ${error.message} `);
        },
        {
          // Options object for enabling high accuracy
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  }, []);
  return (<>
    <div className="mx-[20px] mt-8">
      <Link href="/" className="w-[40px] h-[40px] border-2 border-white rounded-full flex justify-center items-center ml-3"> <Image src="/hamburger (1).svg" width={40} height={40} alt="account" className="rotate-90 "></Image>
      </Link>
      {(location.latitude == 0 && location.longitude == 0) ? "please turn on GPS" : <Map poslat={location.latitude} poslong={location.longitude}></Map>}
      
    </div>
    <button className="fixed h-[60px] w-[60px] bottom-[230px] right-[20px] flex justify-center items-center rounded-full bg-yellow-300">

      <div className="w-[25px] h-[25px] "
        dangerouslySetInnerHTML={{
          __html:
            `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>`,
        }} ></div>
    </button>
    <div className="fixed bottom-5 w-full  overflow-auto  h-[200px] max-h-[50vh]">
    <div className="flex justify-center flex-col px-4">
      <Hotspot></Hotspot>
      <Hotspot></Hotspot>
      <Hotspot></Hotspot>
    </div>
    </div>
  </>
  );
}
