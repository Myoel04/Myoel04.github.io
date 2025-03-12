import React from 'react';
import '../styles/contacto.scss';
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"; // Añadimos FaPhone
import MaikelCV from '../imagenes/MaikelCV.pdf';

function Contacto() {
    return (
        <div className="contacto" id="contacto">
            <h1 className="contact-title">¡Hablemos!</h1>
            <p className="contact-intro">
                Estoy disponible para colaborar en proyectos ilusionantes y potenciales. Si quieres contar conmigo te dejo mis datos:
            </p>
            <div className="contactoButton">
                <a href={MaikelCV} download="MaikelCV.pdf">
                    <button className="botonCv">Descargar CV</button>
                </a>
                <a href="mailto:your-email@gmail.com">
                    <button className="botonMensaje">Mensaje</button>
                </a>
            </div>
            <div className="contactosIcons">
                <div className="contactosItem">
                    <a href="https://github.com/Myoel04" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={50} color="#EDF1D6"/>
                    </a>
                    <span className="contact-info">GitHub</span>
                </div>
                <div className="contactosItem">
                    <a href="https://www.linkedin.com/in/maikel-285995346" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={50} color="#EDF1D6" />
                    </a>
                    <span className="contact-info">LinkedIn</span>
                </div>
                <div className="contactosItem">
                    <a href="mailto:your-email@gmail.com">
                        <SiGmail size={50} color="#EDF1D6" />
                    </a>
                    <span className="contact-info">yosoymyoel@gmail.com</span>
                </div>
                <div className="contactosItem">
                    <a href="tel:+34666666666">
                        <FaPhone size={50} color="#EDF1D6" />
                    </a>
                    <span className="contact-info">+34 666 666 666</span>
                </div>
            </div>
        </div>
    );
}

export default Contacto;