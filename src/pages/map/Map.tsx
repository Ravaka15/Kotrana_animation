import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

const Map: React.FC = () => {
  const mapCenter: LatLngExpression = [-21.465495, 47.112397];
  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={mapCenter}>
        <Popup>
          Vous êtes ici !<br />
          (Remplacez par votre emplacement)
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
