// components/GoogleMap.tsx
import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

interface GoogleMapProps {
  center: { lat: number, lng: number };
  onClick: (lat: number, lng: number) => void;
  routelat: number;
  routelng: number;
}

const MyGoogleMap: React.FC<GoogleMapProps> = ({ center, onClick ,routelat,routelng}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const handleClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      onClick(lat, lng);
      if (mapRef.current) {
        // mapRef.current.setCenter({ lat, lng });
      }
      calculateRoute(lat, lng);
    }
  };
  React.useEffect(() => {
    if (isLoaded) {
      console.log("is loaded")
      console.log(center)
      console.log(routelat, routelng)
      calculateRoute(center.lat, center.lng);
    }
  }, [routelat, routelng]);

  const calculateRoute = (lat: number, lng: number) => {
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: { lat, lng },
        destination: { lat: routelat, lng: routelng },
        travelMode: google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  return isLoaded ? (<>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleClick}
    >
      {directions && <DirectionsRenderer directions={directions} />}
      {/* <Marker position={{ lat: routelat, lng: routelng }} /> */}
    </GoogleMap>
    {center.lat}<br/>{ center.lng}<br/>{routelat}<br/>{routelng}
    </>
  ) : <></>;
};

export default React.memo(MyGoogleMap);