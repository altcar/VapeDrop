"use client";

import React, { useEffect, useState } from "react";
import Map from "../map";

export default function DropHistory(props) {
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
  return (
    <div className="bg-blue-700 flex flex-row justify-start items-center rounded-xl overflow-hidden my-4">
      <div className="py-[0.05rem]">
        {location.latitude == 0 && location.longitude == 0 ? (
          "please turn on GPS"
        ) : (
          <Map poslat={location.latitude} poslong={location.longitude}></Map>
        )}
      </div>
      <div className="w-full py-[0.4rem]">
        <div className="border-b-[1px] ">
          <div className="flex-row flex justify-center items-center">
            <div
              className="w-[20px] h-[20px] flex justify-center items-center invert mx-1"
              dangerouslySetInnerHTML={{
                __html: `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"/><path d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm14.854 58.527l-63.524-41.323c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74z"/></svg>`,
              }}
            ></div>
            <div className="mb-[0.5rem]">
              <div className="font-bold">The Village Shop</div>
              <div className="-my-[0.3rem] text-sm">Sep 16, 2024</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-evenly mt-[0.2rem]">
          <div className="flex flex-row items-center">
            <div
              className="w-[20px] h-[20px] flex justify-center items-center invert mx-1"
              dangerouslySetInnerHTML={{
                __html: `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"/><path d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm14.854 58.527l-63.524-41.323c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74z"/></svg>`,
              }}
            ></div>
            <div className="flex flex-col">
              <h2 className="text-sm">Power</h2>
              <p className="-my-2 text-lg font-extrabold">10</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div
              className="w-[20px] h-[20px] flex justify-center items-center invert mx-1"
              dangerouslySetInnerHTML={{
                __html: `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"/><path d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm14.854 58.527l-63.524-41.323c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74z"/></svg>`,
              }}
            ></div>
            <div className="flex flex-col">
              <h2 className="text-sm">Power</h2>
              <p className="-my-2 text-lg font-extrabold">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
