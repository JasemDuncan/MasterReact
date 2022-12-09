import React, { useState } from 'react'

export const Crear = () => {
    
    const tituloComponente ="Anadir pelicula2";
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

        //Guardar local storage
        guardarEnStorage(peli)
        console.log(peliState);

    };

    const guardarEnStorage = peli => {
        //Conseguir elementos que se tienen en el localStorage
        let elementos = JSON.parse(localStorage.getItem("pelis"));
        console.log(elementos);
        
        //Comprobar si es una array
        if(Array.isArray(elementos)){
            //Anador un elemento nuevo
            elementos.push(peli);
        } else {
            //Crear un array con la nueva peli
            elementos = [peli];
        }

        //Guardar en el local storage
        localStorage.setItem("pelis", JSON.stringify(elementos));
        
        //Devolver objeto
        return peli;
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
