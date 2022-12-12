import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        console.log("Componente del listado de peliculas cargado!!");
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        console.log(peliculas);
        setListadoState(peliculas);
        return peliculas;
    };

    const borrarPeli = (id)=> {
        // alert(id)
        //Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_pelis = pelis_almacenadas.filter(peli =>peli.id!== parseInt(id));

        //Actualizar estado del listado
        console.log(pelis_almacenadas, nuevo_array_pelis);

        setListadoState(nuevo_array_pelis);

        //Actualizar datos en el local storage
        localStorage.setItem('pelis',JSON.stringify(nuevo_array_pelis));
    }

    return (
        <>
            {listadoState!=null? listadoState.map(peli => {
                return (
                    <article className="peli-item" key={peli.id}>
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>
                        <button className="edit">Editar</button>
                        <button className="delete" onClick={()=> borrarPeli(peli.id)}>Borrar</button>
                    </article>
                );
            })
            :<h2>NO hay peliculas para mostrar</h2>
            }
        </>
    )
}
