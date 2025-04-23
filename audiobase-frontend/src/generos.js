import React, { useEffect, useState } from 'react';
import './generos.css';  // Asegúrate de tener este archivo para los estilos
import Sidebar from './reprodcutor/navbar';
import { Link } from 'react-router-dom';


const Generos = () => {
    const [generos, setGeneros] = useState([]);  // Guardamos los géneros

    useEffect(() => {
        // Obtener los géneros
        fetch('http://localhost/Audiobase/audionase_backend_php/genero.php')  // Endpoint para géneros
            .then(res => res.json())
            .then(data => setGeneros(data));
    }, []);

    return (
        <>

            <Sidebar />
            <div className="contenedor-generos">
                {generos.map((genero, index) => (
                    <Link
                        to={`/generos-canciones/${genero.id}`}
                        key={index}
                        className="tarjeta-genero"
                    >
                        <div className="nombre-genero">{genero.nombre}</div>
                    </Link>
                ))}
            </div>

        </>

    );
};

export default Generos;
