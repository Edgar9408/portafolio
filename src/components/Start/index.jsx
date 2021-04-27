import React from "react";
import avatar from '../../Img/Avatar.png';
import './Start.css';


const Start = () => {
    return (
        <div className='containerStart'>
            <div className='avatar'>
                <img className='avatar1' src={avatar} alt="Edgar Palma" />
            </div>
            <div className='texto'>
                <h4 className='Nombre'> Hola, Mi nombre es </h4>
                <h4 className='Edgar'> Edgar Andres Palma Florido </h4>
                <h4 className='Soy'> Soy </h4>
                <h4 className='Dev'> DESARROLLADOR FULL STACK </h4>
            </div>
        </div>
    )
}

export default Start;