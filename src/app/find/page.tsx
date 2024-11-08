"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Map from "../component/map";
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
    {(location.latitude == 0 && location.longitude == 0) ? "please turn on GPS" : <Map poslat={location.latitude} poslong={location.longitude}></Map>}
    <div className="bg-blue-700 flex flex-row justify-start items-center rounded-xl overflow-hidden">
        <div className="py-[0.05rem]">
          <Image src="/map.jpg" alt="map" width={200} height={200} className="rounded-full"></Image>
        </div>
        <div className="w-full py-[0.4rem]">
          <div className="border-b-[1px] ">
            <div className="flex-row flex justify-center items-center">
            
              <div className="mb-[0.5rem]">
                <div className="font-bold">The Village Shop</div>
                <div className="-my-[0.3rem] text-[10px]">Vapdrop bin</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-evenly mt-[0.2rem]">
            <div className="flex flex-row items-center">
              <div className="w-[20px] h-[20px] flex justify-center items-center invert mx-1"
                dangerouslySetInnerHTML={{
                  __html:
                    `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"/><path d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm14.854 58.527l-63.524-41.323c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74z"/></svg>`,
                }} ></div>
              <div className="flex flex-col">
                <h2 className="text-sm">Power</h2>
                <p className="-my-2 text-lg font-extrabold">10</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-[20px] h-[20px] flex justify-center items-center invert mx-1"
                dangerouslySetInnerHTML={{
                  __html:
                    `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"/><path d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm14.854 58.527l-63.524-41.323c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74z"/></svg>`,
                }} ></div>
              <div className="flex flex-col">
                <h2 className="text-sm">Power</h2>
                <p className="-my-2 text-lg font-extrabold">10</p>
              </div>
            </div>


          </div>
        </div>
      </div>
      
    </div>
    <button className="fixed h-[60px] w-[60px] bottom-[60px] right-[20px] flex justify-center items-center rounded-full bg-yellow-300">

    <div className="w-[25px] h-[25px] "
                dangerouslySetInnerHTML={{
                  __html:
                    `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>`,
                }} ></div>
    </button>
    <footer className="grid grid-cols-3 fixed bottom-0 w-full [&>*]:flex [&>*]:justify-center [&>*]:items-center h-[50px] bg-green-400 text-purple-900"> {/* justify-items-center items-center  */}
      
    <a href="" className="h-full w-full">Home</a>
    <a href="" className="h-full w-full" >Scan</a>
    <a href="" className="h-full w-full">Account</a>
</footer>
</>
  );
}
