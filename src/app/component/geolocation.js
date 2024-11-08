// import browserEnv from 'browser-env';
// browserEnv(['navigator']);

function isGeolocationAvailable() {
  return "geolocation" in navigator;
}
// Function to get the user's current position

export default function getUserLocation() {
  if (isGeolocationAvailable()) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Handle position data here
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude} , Longitude: ${longitude} `);
      },
      (error) => {
        console.error(`Geolocation error: ${error.message} `);
      },
      {  // Options object for enabling high accuracy
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
