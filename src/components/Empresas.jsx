
import { useEffect } from "react"
import data from '../assets/empresas.json'


export default function Empresas() {

  return (
    <>
    <ul>
        {
          data.map((item, index) => (
          <li key={index}>
            {item.nombre} {item.ciudad}
            </li>
        )
          )
        }
      </ul>


    </>
  )
}



