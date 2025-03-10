import React, { useState, useEffect } from 'react';
import '../styles/proyectos.scss';

function Proyectos() {
    const projects = [
        {
            name: "RECM",
            description: "Aplicación de recetas de comida hecha en Kotlin y con bases de datos en Firebase Google.",
            image: require("../imagenes/recmLogo.png"), // Ruta relativa
            githubLink: "https://github.com/Myoel04/Recmm.git"
        },
        {
            name: "Proyecto MVC",
            description: "Proyecto de gestión de coches con interfaz y bases de datos.",
            image: require("../imagenes/proyectomvc.jpg"), // Ruta relativa
            githubLink: "https://github.com/Myoel04/ProyectoMVC.git"
        },
        {
            name: "PajaroVolador",
            description: "Juego de un pájaro volador, se trata de esquivar tuberías a medida que va corriendo el pájaro en la pantalla.",
            image: require("../imagenes/pajaroicono.png"), // Ruta relativa
            githubLink: "https://github.com/Myoel04/FlappyBird-Maikel.git"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [projects.length]);

    return (
        <div className="proyectos" id="proyectos">
            <h1 className="titulo-proyectos">PROYECTOS</h1>  {/* Título agregado */}
            <div className="proyectos-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projects.map((project, index) => (
                    <div className="proyecto" key={index} style={{ backgroundImage: `url(${project.image})` }}>
                        <div className="project-content">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="dots">
                {projects.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Proyectos;
