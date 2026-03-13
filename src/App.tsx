import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import toilet from '../public/sem-fundo.png'
import * as L from 'leaflet'

const greenIcon = L.icon({
    iconUrl: toilet,
    iconSize:     [25, 25], // size of the icon
});

function App() {
  return (
    <>
      <header
        style={{
          background: "green",
          fontFamily: "Arial",
          height: "10vh",
        }}
      >
        <h1 style={{ color: "white", display: "grid", placeItems: "center" }}>
          Mapa interativo - IFRS Campus Restinga
        </h1>
      </header>
      <MapContainer
        center={[-30.1408963, -51.1326784]}
        zoom={17}
        style={{ width: "100%", height: "90vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-30.14170345495248, -51.13049362323519]}>
          <Popup>Cantina do rafa</Popup>
        </Marker>
        <Marker position={[-30.140658776897226, -51.13067789633933]}>
          <Popup>Quadra do IFRS</Popup>
        </Marker>
        <Marker position={[-30.14144921356257, -51.130797828931925]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
        <Marker position={[-30.141707842286756, -51.13044511843559]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
        <Marker position={[-30.141434136530837, -51.130365993267205]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
        <Marker position={[-30.141685806681963, -51.130140687703005]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
        <Marker position={[-30.141550113638743, -51.1300333993391]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
        <Marker position={[-30.14126828902699, -51.13023322391849]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
        <Marker position={[-30.141074606620165, -51.13007765580158]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
        <Marker position={[-30.140860047829424, -51.12990733552388]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
        <Marker position={[-30.140621516266794, -51.1307370362456]} icon={greenIcon}>
          <Popup>Banheiro</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
