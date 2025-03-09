import React from 'react';
import '../styles/contacto.scss';
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contacto() {
    return (
        <div className="contacto" id="contacto">
            <h1 className="contact-title">Contacto</h1>
            <div className="contactosIcons">
                <div className="contactosItem">
                    <a href="https://github.com/Myoel04" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={50} color="white"/>
                    </a>
                </div>
                <div className="contactosItem">
                    <a href="https://www.linkedin.com/in/maikel-285995346" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={50} color="white" />
                    </a>
                </div>
                <div className="contactosItem">
                    <a href="mailto:your-email@gmail.com">
                        <SiGmail size={50} color="white" />
                    </a>
                </div>
                <div className="contactosItem">
                    <a href="ubicacion-de-tu-cv/cv.pdf" download="Maikel_Yoel_CV.pdf">
                        <button className="download-cv-button">Descargar CV</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
