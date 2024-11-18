"use client";
import React from "react";
import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
export default function Maps({poslat = 43, poslong = -79}) {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "",
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");
      const pos1 = {
        lat: poslat,
        lng: poslong,
      };
      //npm install  @types/google.maps
      const mapOptions: google.maps.MapOptions = {
        center: pos1,
        zoom: 17,
        // mapID: "MAPID",
      };
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    };
    initMap();
  });
  return <div id="mapcanvas" ref={mapRef}></div>;
}
