import React from 'react';
import './codigo.css';

function Codigo() {
    return(
    <div className='clase-container' style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
    }}>
        <div className='codigoClase'>
            <h5 className='Text-center negro'>Empezar a trabajar</h5>
            <div className='contenedor-input'>
                <div className='contenedor-interno'>
                <span style={{
                    textAlign: "left"
                }}>Clase</span>
                <input type="text" />

                </div>
            </div>
            <button className="green-btn">Comenzar</button>
        </div>

    </div>
    );
};

export default Codigo;