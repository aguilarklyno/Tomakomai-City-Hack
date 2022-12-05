import React from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";

  const center = {
    lat: 35.69575,
    lng: 139.77521,
  };

const Map = () => {
  return (
    <div className='m-4 sm:w-5/12 w-60 h-44 bg-gray-300'>
      <LoadScript googleMapsApiKey="AIzaSyA3Etb-HJuNmPzSxQL9moNwtfwcqNN7v18">
        <GoogleMap
          center={center}
          zoom={17}
        ></GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map