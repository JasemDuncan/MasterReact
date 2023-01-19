import React, {useState, useEffect, useCallback} from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [nombre,setNombre] = useState("");

  const [pagina, setPagina] = useState(1);

  // const gestorInput =useRef();

  const asignarGestor = e =>{
    
    setNombre(e.target.value);
  }

  useEffect(() => {
    console.log("Vista gestion actualizada");
  }, [nombre,pagina])
  
  const mostrarMensaje = useCallback(()  => {
    console.log("MENSAJE DESDE EL COMPONENTE EMPLEADOS!");
  },[pagina]);

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type="text"  onChange={asignarGestor} placeholder="Introduce el nombre"/>
        <h2>Listado de empleados</h2>
        <p>Los usuarios vienen de jsonplaceholder.</p>
        <button onClick={()=>{setPagina(1)}}>Pagina 1</button> 
        <button onClick={()=>{setPagina(2)}}>Pagina 2</button>
        <Empleados pagina= {pagina} mensaje = {mostrarMensaje}/>
    </div>
  )
}
