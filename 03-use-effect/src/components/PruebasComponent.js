import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
  
  const [usuario, setUsuario] = useState("Victor Robles");
  const [fecha, setFecha] = useState("01-01-1998");
  const [contador, setContador] = useState(0);

  const modUsuario= e => {
    setUsuario(e.target.value);
    console.log("Ha habido un cambio en usuario");
  };

  const cambiarFecha = e =>{
    setFecha(Date.now());
  };

  //Este useEffect solo se ejecuta una vez ya que: [] solo al cargar el componente
  useEffect(()=>{
    console.log("Haz cargado el componente PruebasComponent o haz realizado un cambio en un ESTADO");
  },[])

  //Se ejecuta solo si cambia el usuario, el [] tengo que pasar en que propiedades quiero que se dispare.
  useEffect(()=>{    
    setContador(contador+1);
    console.log("Haz cambiado el usuario!:"+contador);
  },[usuario, fecha]);

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>

        <strong className={contador >=10 ? 'label label-green':'label' }>{usuario}</strong>
        <strong>{fecha}</strong>
        <p>
          <input  type="text" 
                  onChange={modUsuario} 
                  placeholder="Cambia el nombre"
              />
          <button onClick={cambiarFecha}>CambiarFecha</button>
        </p>      
        {/* && funcion como entonecs  */}
        {/* {contador>=20 && <AvisoComponent/>}   */}
        {usuario == "VICTOR" && <AvisoComponent/>}
    </div>
  )
}
