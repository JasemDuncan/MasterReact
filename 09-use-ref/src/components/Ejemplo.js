import React, { useState, useEffect, useRef } from 'react'

export const Ejemplo = () => {

    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const saludosEnCola = useRef(numeroSaludo);

    useEffect(() => {
        saludosEnCola.current = numeroSaludo;
        setTimeout(() => { console.log("Mensajes en cola: " + saludosEnCola.current) }, 2000)
    }, [numeroSaludo])

    const enviarSaludo = e => {
        console.log("Saludo Enviado");
        setNumeroSaludo(numeroSaludo + 1);
    }

    return (
        <div>
            <h1>Ejemplo con UseRef</h1>
            <h2>Saludos Enviados: {numeroSaludo}</h2>
            <button onClick={enviarSaludo}>Enviar Saludo</button>
        </div>

    )
}
