import React, {useRef} from 'react'

export const Formulario = () => {
    const nombreInput = useRef();
    const apellidoInput = useRef();
    const emailInput = useRef();
    const miCaja = useRef();

    const mostrar = e =>{
        e.preventDefault();

        console.log(nombreInput.current.value);

        //miCaja

        console.log(miCaja);

        let {current: caja } = miCaja;
        //miCaja.current.classList.add("fondoVerde");
        caja.classList.add("fondoVerde");
        caja.innerHTML = "Formulario Enviado";
        
    }

  return (
    <div>
        <h1>Formulario</h1>

        <div ref={miCaja} className="miCaja">
            <h2>Pruebas con useRef</h2>

        </div>

        <form onSubmit={mostrar}>
            <input type="text" placeholder='Nombre' ref={nombreInput}/> <br/>
            <input type="text" placeholder='Apellidos' ref={apellidoInput}/><br/>
            <input type="email" placeholder='Correo Electronico' ref={emailInput}/><br/>
            
            <input type="submit" placeholder='Enviar'/> <br/>

        </form>

        <button onClick={() => nombreInput.current.select()}>Empezar a llevar el formulario</button>
    </div>
  )
}
