import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(({ pagina, mensaje }) => {

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    console.log("Vista se ha vuelto a rederizada compoenten EMPleados");
  }, [empleados])

  const conseguirEmpleados = async (p) => {
    const url = "https://reqres.in/api/users?page=" + p;
    const peticion = await fetch(url);
    // const empleados = await peticion.json();
    const { data: empleadosRenombradoDeData } = await peticion.json();

    setEmpleados(empleadosRenombradoDeData);

  }

  useEffect(() => {
    conseguirEmpleados(pagina);
  }, [pagina]);

  mensaje();

  return (
    <div>
      <p>Mostrando pagina: {pagina}</p>
      <ul className='empleados'>
        {
          empleados.length > 1 &&
          empleados.map(empleado => {
            return <li key={empleado.id}> {empleado.first_name + " " + empleado.last_name}</li>
          })
        }
      </ul>
    </div>
  )
}
)
