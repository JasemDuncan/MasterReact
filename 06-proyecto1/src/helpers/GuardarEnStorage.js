export const GuardarEnStorage = (clave, elemento) => {
    //Conseguir elementos que se tienen en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);
    
    //Comprobar si es una array
    if(Array.isArray(elementos)){
        //Anador un elemento nuevo
        elementos.push(elemento);
    } else {
        //Crear un array con la nueva peli
        elementos = [elemento];
    }

    //Guardar en el local storage
    localStorage.setItem(clave, JSON.stringify(elementos));
    
    //Devolver objeto
    return elemento;
};