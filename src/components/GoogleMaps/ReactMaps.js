import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import hospitalData from "../../assets/contentData/hospital.json";
import hospitalIconUrl from "../../assets/PNG/hospital-icon.png";
import clinicIconUrl from "../../assets/PNG/clinic-icon.png";
import gynaecologistIconUrl from "../../assets/PNG/gynaecologist-icon.png";

import "./maps.css";

function ReactMaps() {
  const position = [-1.2921, 36.8219];// geographical center of kenya/nairobi
  const zoomLevel = 13;

  // define icons for different categories
  const hospitalIcon = L.icon({
    iconUrl: hospitalIconUrl,
    iconSize: [32, 32],
  });

  const clinicIcon = L.icon({
    iconUrl: clinicIconUrl,
    iconSize: [32, 32],
  });

  const gynaecologistIcon = L.icon({
    iconUrl: gynaecologistIconUrl,
    iconSize: [32, 32],
  });

  //map over the hospital arr
  const markers = hospitalData.map((item) => {
    // let icon = null;
    // // set the icon based on category
    // if (item.category === "Hospital") {
    //   icon = hospitalIcon;
    // } else if (item.category === " Gynaecology Clinic") {
    //   icon = clinicIcon;
    // } else if (item.category === "Gynaecologist") {
    //   icon = gynaecologistIcon;
    // }
    return (
      <Marker position={[item.latitude, item.longitude]} key={item.name} >
        <Popup>
          <h5>{item.name}</h5>
          <p>{item.address}</p>
          <p>{item.contact}</p>
          <p>{item.email}</p>
          <a href={item.website}>{item.website}</a>
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  );
}

export default ReactMaps;
