import { useState } from "react"
import "./MiOrg.css"


const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //Const [nombreVAriable, funcionActualiza] = useState(valirInicial)
    console.log(props)
    const[mostar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
   //     console.log("Mostrar/Ocultar elemento",!mostar)
  //      actualizarMostrar(!mostar)
   // }

    return <section className="OrgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg