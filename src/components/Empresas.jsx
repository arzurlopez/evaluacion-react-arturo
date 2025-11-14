
import { useEffect } from "react"
import empresas from '../assets/empresas.json'


export default function Empresas() {

  return (
    <>
    Empresas
    </>
  )
}




/* function VerRutasExternas() {
  const [escapadas, setEscapadas] = useState([])
  useEffect(() => {
    const cargarEscapadas = async () => {
      try {
        const respuesta = await fetch('http://localhost:5173/escapadas.json')
        const data = await respuesta.json()
        setEscapadas(data)
        console.log(data)
      } catch (e) {
        console.error(`Se ha producido un error ${e}`)
      }
    }
    cargarEscapadas();
  }, []) */



/* 
  import { useEffect } from "react"

export default function Empresas() {
  return (
    <>
    Empresas
    </>
  )
} */