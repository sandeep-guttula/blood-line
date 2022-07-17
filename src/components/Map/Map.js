import { GoogleMap, useLoadScript, Marker,useJsApiLoader } from "@react-google-maps/api";
import React,{useState, useEffect} from 'react';
const containerStyle = {
  width: '98.5vw',
  height: '635px'
};

let center = {
  lat: 55.0033255,
  lng: 82.2526515
};



function Map() {
  let [location, setLocation] = useState({
    lat:55.0033255,
    lng:82.2526515
  })

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => getUserCoords)
  //   async function getUserCoords(userCoords){
  //      setLocation({
  //       lat:await userCoords.coords.latitude,
  //       lng:await userCoords.coords.longitude
  //     })
  //   }
  // }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((currPosition) => {
      setLocation({
        lat:currPosition.coords.latitude,
        lng:currPosition.coords.longitude
      })
    })
  }, [])

  const { isLoaded } = useJsApiLoader({ 
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAJLMLxMUWh3EfoAMvSD_f-_HSZh1WVUmY"
  })

  const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(location);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        <Marker position={location}/>
      </GoogleMap>
      
    </>
  ) : <></>
}

export default React.memo(Map)
