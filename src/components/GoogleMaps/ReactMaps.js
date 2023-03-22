import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import hospitalData from "../../assets/contentData/hospital.json";

import "./maps.css";

function ReactMaps() {
  const position = [-1.2921, 36.8219]; // geographical center of kenya/nairobi
  const zoomLevel = 13;

  // fn append color to array by category
  function appendColorsByCategories(data, categoriesAndColors) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < categoriesAndColors.length; j++) {
        if (data[i].category === categoriesAndColors[j].category) {
          data[i].color = categoriesAndColors[j].color;
        }
      }
    }
    return data;
  }

  const categoriesAndColors = [
    {
      category: "Hospital",
      color: "red",
    },
    {
      category: "Gynaecologist",
      color: "green",
    },
    {
      category: "Gynecologist Clinic",
      color: "blue",
    },
  ];

  const newMapsData = appendColorsByCategories(
    hospitalData,
    categoriesAndColors
  );
  // console.log(newMapsData);

  //map over the hospital arr
  const markers = newMapsData.map((item) => {
    return (
      <Marker
        position={[item.latitude, item.longitude]}
        key={item.name}
        icon={
          new L.Icon({
            iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${item.color}.png`,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          })
        }
      >
        <Popup className="custom-popup">
          <div class="maps-card">
            <div class="maps-card-img">
              <h2>{item.name}</h2>
            </div>
            <div class="maps-card-info">
              <p class="maps-text-body">{item.contact}</p>
              <a
                class="maps-text-body"
                href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${item.email}`}
              >
                {item.email}
              </a>

              <p class="maps-text-body">
                <b>{item.category}</b>
              </p>
            </div>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <div>
      <h2 className="title">Map of Gynaecologists , Hospitals and Clinics </h2>
      <caption>Contact Information Provided</caption>
      <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>
    </div>
  );
}

export default ReactMaps;
