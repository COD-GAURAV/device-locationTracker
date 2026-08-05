import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const App = () => {
  const [Infoobject, setInfoobject] = useState({});
  const [Position, setPosition] = useState([28.4595, 77.0266]);

  useEffect(() => {
    const system = navigator.userAgent;
    const lang = navigator.language;
    const plat = navigator.platform;
    const cpuCore = navigator.hardwareConcurrency;
    const online = navigator.onLine;
    const touch = navigator.maxTouchPoints;
    const memory = navigator.deviceMemory;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition([
          position.coords.latitude.toFixed(4),
          position.coords.longitude.toFixed(4),
        ]);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      },
      (err) => {
        console.log("err");
      },
    );
    setInfoobject({
      os: system.includes("Windows")
        ? "Windows"
        : system.includes("Android")
          ? "Android"
          : system.includes("iPhone")
            ? "IPhone"
            : system.includes("Mac")
              ? "MacOs"
              : "Not found",
      browser: system.includes("Chrome")
        ? "Chrome"
        : system.includes("Firefox")
          ? "Firefox"
          : system.includes("Safari")
            ? "Safari"
            : "Not Found",
      language: lang,
      platform: plat,
      core: cpuCore,
      isOnline: online === true ? "True" : "False",
      touch: touch > 0 ? "Yes" : "No",
      RAM: memory,
    });
  }, []);
  console.log(Position);
  return (
    <div className="flex flex-col justify-around items-center h-screen w-full">
      <div>
        <h1 className="text-xl sm:text-6xl font-bold">Location tracker & Device informer</h1>
      </div>
      <table className="w-[90%] sm:w-[30%] text-center border">
        <tr>
          <th>Name</th>
          <th>User</th>
        </tr>

        <tr>
          <td>
            <p>Operating System</p>
          </td>
          <td>
            <p>{Infoobject.os}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Browser</p>
          </td>
          <td>
            <p>{Infoobject.browser}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Language</p>
          </td>
          <td>
            <p>{Infoobject.language}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Platform</p>
          </td>
          <td>
            <p>{Infoobject.platform}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>CPU core</p>
          </td>
          <td>
            <p>{Infoobject.core}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Online</p>
          </td>
          <td>
            <p>{Infoobject.isOnline}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Touch</p>
          </td>
          <td>
            <p>{Infoobject.touch}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>RAM</p>
          </td>
          <td>
            <p>{Infoobject.RAM} GB</p>
          </td>
        </tr>
      </table>

      <MapContainer
        center={Position}
        zoom={13}
        // style={{ width: "50%", height: "50vh" }}
        className="w-[90%] h-[40vh] sm:w-[50%] sm:h-[50vh]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={Position} />
      </MapContainer>
    </div>
  );
};

export default App;
