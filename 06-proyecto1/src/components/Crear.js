import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {
    
    const tituloComponente ="Anadir pelicula";
    const [peliState, setPeliState]=useState({
        titulo: '',
        descripcion: ''
    });

    //Desectructuracion
    const {titulo, descripcion}=peliState;

    const conseguirDatosForm = e=>{
        // Metodo para evitar que se refresque la pantalla
        e.preventDefault();
        //Conseguir datos del formulario
        let target =e.target;
        let titulo =target.titulo.value;
        let descripcion = target.descripcion.value;
        
        //Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            // titulo: titulo Antes pero los nuevos standeres permiten titulo,
            titulo,
            descripcion
        };

        //Guardar estado
        setPeliState(peli);

        //Acutalizar el estado del Listado Principal
        setListadoState(elementos =>{
            return [...elementos,peli]
            //return [peli,...elementos] para agregar al principio
        });

        //Guardar local storage
        GuardarEnStorage("pelis",peli);                

    };

    

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            
            <strong>
                {(titulo && descripcion) && "Haz creado la pelicula: " + titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                        id="titulo" 
                        name="titulo"
                        placeholder="Titulo" />
                <textarea 
                        id="decsripcion"
                        name="descripcion"
                        placeholder="Descripcion"></textarea>
                <input  type="submit" 
                        id="save"    
                        value="Guardar" />
            </form>
        </div>
    )
}
