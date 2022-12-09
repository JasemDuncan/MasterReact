import React, { useEffect, useState } from 'react'

export const Listado = () => {

    const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        console.log("Componente del listado de peliculas cargado!!");
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        console.log(peliculas);
        setListadoState(peliculas);
    };

    return (
        <>
            {listadoState!=null? listadoState.map(peli => {
                return (
                    <article className="peli-item" key={peli.id}>
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>
                        <button className="edit">Editar</button>
                        <button className="delete">Borrar</button>
                    </article>
                );
            })
            :<strong>NO hay peliculas para mostrar</strong>
            }
        </>
    )
}
