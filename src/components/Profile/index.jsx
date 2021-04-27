import React from 'react';
import { profile } from '../data.js'
import './Profile.css'
import Avatar2 from '../../Img/Avatar2.png'


const Profile = () => {
    const hora = new Date().getHours()
    const saludo = function (Hora){
        if (Hora<12) {
            return "Buenos días"
        }else if (Hora<19) {
            return "Buenas tardes"
        }else{
            return "buenas noches"
        }
    }
    return (
        <div className='Container container-fluid'>
            <h1 className="Saludo" >{saludo(hora)}</h1>
            <div className='perfil row'>
                <p className="col-lg-5 col-sm-10 col-md-10 ml-md-1 mr-md-1 ml-sm-1 mr-sm-1">{profile.profile}</p>
                <img className="Avatar2 col-lg-5 col-sm-10 col-md-10 ml-md-1 mr-md-1 ml-sm-1 mr-sm-1" src={Avatar2} alt='' />
            </div>
        </div>
    )
}

export default Profile;