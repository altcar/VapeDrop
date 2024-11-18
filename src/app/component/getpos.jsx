



// const [position, setPosition] = useState({ latitude: null, longitude: null });
// const [error, setError] = useState(null);

// useEffect(() => {
//   if (typeof window !== 'undefined' && 'geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setPosition({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         setError(error.message);
//       }
//     );
//   } else {
//     setError('Geolocation is not supported by this browser.');
//   }
// }, []);