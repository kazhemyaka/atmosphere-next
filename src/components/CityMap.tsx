"use client";

import { FC, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface UpdateMapProps {
  center: [number, number];
  zoom: number;
}

const UpdateMap: FC<UpdateMapProps> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

interface CityMapProps {
  location: {
    lat: number;
    lon: number;
  };
}

const CityMap: FC<CityMapProps> = ({ location }) => {
  return (
    <div className="h-80 sm:h-96 xl:h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <MapContainer
        center={[location.lat, location.lon]}
        zoom={10}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMap center={[location.lat, location.lon]} zoom={10} />
      </MapContainer>
    </div>
  );
};

export default CityMap;
