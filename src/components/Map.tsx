"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function Map() {
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };
  return (
    <div className="w-[100%] sm:w-[344px] h-[224px] xl:w-[1755px] xl:h-[650px] ">
      {/* <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      > */}
      <LoadScript googleMapsApiKey="AIzaSyBdkRkWiUt1SIzq5ArV4iI_H7Tbfs5TtTY">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
          }}
          center={center}
          zoom={12}
          options={mapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
