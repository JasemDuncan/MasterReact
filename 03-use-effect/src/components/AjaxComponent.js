import React, { useState, useEffect } from 'react'

export const AjaxComponent = () => {
    //Promesa
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");

    //Generico o Basico
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
        ]);
    };

    const getUsuarioAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data)
                    console.log(usuarios)
                },
                error => {
                    console.log(error);
                }
            )
    }

    //definicon como la funcion async para poder usar await
    const getUsuariosAjaxAW = () => {

        setTimeout(async () => {
            try {
                //aca se esperara al resultado que devuelva fetch()
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const { data } = await peticion.json();
                console.log(data);
                setUsuarios(data);
                setCargando(false);
                
            }catch(error){
                console.log("Hola->",error.message);
                setErrores(error.message);
            }
            
        }, 2000);

    }

    useEffect(() => {
        // getUsuariosEstaticos();
        //getUsuarioAjaxPms();
        getUsuariosAjaxAW();
    }, []);

    if(errores !== ""){
        //cunado pasa algu error
        return (
            <div className='errores'>
                {errores}                
            </div>
        );
    } //condicion
     else if (cargando == true) {
        //Cuando todo esta cargando
        return (
            <div className='cargando'>
                Cargando Datos...

            </div>
        );
    } else if (cargando==false && errores === "") {
        //Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            console.log(usuario);
                            return <li key={usuario.id}>
                                <img src={usuario.avatar} width="50" />
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}
                            </li>
                        })
                    }
                </ol>
            </div>
        )
    }


}
