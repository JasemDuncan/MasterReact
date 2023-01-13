import React from 'react'

export const Tareas = () => {
    return (
        <div className='tareas-container'>
            <h1>Mis tareas</h1>

            <form>
                <input type="text" name="titulo" placeholder='Describe la tarea' />
                <input type="submit" value="guardar"/>
            </form>

            <h3>Lista de tareas:</h3>
        </div>
    )
}
