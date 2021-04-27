import React, { useState } from "react";
import { Contactame } from "../data.js"
import emailjs from "emailjs-com"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "./ContactMe.css"

const ContactMe = () => {
    const [datos, setdatos] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleInputChange = function (e) {
        setdatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e, datos) => {
        e.preventDefault();
        console.log(datos)
        emailjs.send("service_edgar.palma", "template_2h6j4sq", datos, "user_l4hIQqiGHKsGFw2XlSOxf")
            .then(alert("Email enviado correctamente"))
        setdatos({
            name: "",
            email: "",
            message: "",
        })
    }


    return (
        <div className="Contact">
            <h1>Contacto</h1>
            <div className="Contact-cont container" >
                <div className="Int row justify-content-center">
                    <div className="Contact-t col-lg-6 col-sm-12 mb-sm-20" >
                        <h2>Contactame!!</h2>
                        <p className="Contact-texto" >{Contactame.texto}</p>
                        <div className="contact-icons" >
                            <FontAwesomeIcon role="button" onClick={() => window.open('https://www.linkedin.com/in/edgar-palma9408/')} className="LinkeidIn" icon={faLinkedin} size="4x" />
                            <FontAwesomeIcon role="button" onClick={() => window.open('https://github.com/Edgar9408')} className="GitHub " icon={faGithub} size="4x" />
                            <FontAwesomeIcon role="button" onClick={() => window.open('https://wa.me/543518028263?')} className="WhatsApp" icon={faWhatsapp} size="4x" />
                            <FontAwesomeIcon role="button" onClick={() => window.open("mailto:edgar.palma9408@gmail.com")} className="Email" icon={faEnvelope} size="4x" />
                        </div>
                    </div>
                    <div className="Contact-f col-lg-6 col-sm-12" onSubmit={(e) => handleSubmit(e, datos)}>
                        <h2>Escribeme!!</h2>
                        <form>
                            <div className="Form-1" >
                                <input type="text" className="name" value={datos.name} name="name" onChange={handleInputChange} placeholder="Nombre" />
                                <input type="text" className="email" value={datos.email} name="email" onChange={handleInputChange} placeholder="Email" />
                            </div>
                            <textarea className="message" value={datos.message} name="message" onChange={handleInputChange} placeholder="Escriba aqui su mensaje..."></textarea>
                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;