import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const MyMap = ({position})=>{
    return(
         <MapContainer
        center={position}
        zoom={13}
        // style={{ width: "50%", height: "50vh" }}
        className="w-[90%] h-[40vh] sm:w-[50%] sm:h-[50vh]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={position}/>
      </MapContainer>
    )
}

export default MyMap