import React from 'react'
import { useParams } from 'react-router-dom'

export const Personas = () => {

    //Valores por defecto
    // let {nombre="Jasem", apellido="Valencia"} = useParams();

    // if(!nombre){
    //     nombre = "Jasem";
    // }
    // if(!apellido){
    //     apellido="Valencia"
    // }


    const {nombre, apellido}=useParams();
    return (
        <div>
            {!nombre && <h1>No hay ninguna person que mostrar.</h1>}
            {nombre && <h1>Pagina de persona: {nombre+" "+apellido}</h1>}            
            <p>Esta es la pagina de persona</p>
        </div>
    )
}
