import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  return (
    <>
      <div className="content">
        <h1>Maps</h1>
      </div>
      <MapContainer className="map" center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
