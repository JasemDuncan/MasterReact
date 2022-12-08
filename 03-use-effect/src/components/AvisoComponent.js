import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //Cuando el componente se monta
        alert("El componente AvisoComponent esta montado")
        
        //Cuando el componente se desmonta
        return ()=>{
            alert("Componente desmontado");
        };
    },[]); //S eejecuta una vez por que le paso el array vacio


  return (
    <div>
        <hr/>
        <h3>Saludos Victor, que tal?</h3>
        <button onClick={e=>{ 
            alert("Bievenido")
        }}>Mostrar Alerta</button>
    </div>
  )
}
