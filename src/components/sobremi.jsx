import React from 'react';
import '../styles/sobremi.scss';
import imagenPerfil from '../imagenes/sobre.png'; // Ensure this image has a transparent background

function SobreMi() {
    return (
        <div className="sobremi" id="sobremi">
            <div className="sobremi-content">
                <div className="sobremi-image">
                    <img src={imagenPerfil} alt="Maikel Yoel" />
                </div>
                <div className="sobremi-text">
                    <h1>Sobre Mí</h1>
                    <p>
                        Hola, soy Maikel Yoel, un apasionado Desarrollador con experiencia en la creación de aplicaciones multiplataforma. Graduado en DAM (Desarrollo de Aplicaciones Multiplataforma). Si buscas a alguien comprometido, con habilidades y técnicas sólidas, estoy siempre en la búsqueda de nuevos retos que me permitan crecer profesionalmente.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SobreMi;