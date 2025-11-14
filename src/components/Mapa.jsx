
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
/* import Empresas from '../public/empresas.json'
 */


export default function Mapa() {
  return (
    <>
    Mapa
    </>
  )
}


/* 
export default function MapaEmpresas() {
    const style = {
        height: "500px"
    }
    const position = [40.4074, -3.6885]
    return (
        <>
            <div>
                <MapContainer
                    style={style}
                    center={position}
                    zoom={9}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {escapadas.map((item,index)=>(
                      <Marker key={index} position={item.latlong}></Marker>   
                    ))}

                </MapContainer>

            </div>
        </>
    )
} */
