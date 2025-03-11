import React, { useState, useEffect } from 'react';
import '../styles/Inicio.scss';

const roles = [
    "Desarrollador Java |",
    "Desarrollador de videojuegos |",
    "Desarrollador web"
];

function Inicio() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (subIndex === roles[index].length + 1) {
            setTimeout(() => {
                setSubIndex(prev => prev - 1); // Comienza a borrar
            }, 2000);
        } else if (subIndex < 0) {
            setIndex(prev => (prev + 1) % roles.length);
            setSubIndex(0);
        } else {
            const timeout = setTimeout(() => {
                setText(roles[index].substring(0, subIndex));
                setSubIndex(prev => subIndex > roles[index].length ? prev - 1 : prev + 1);
            }, subIndex > roles[index].length ? 50 : 150);
            return () => clearTimeout(timeout);
        }
    }, [subIndex, index]);

    useEffect(() => {
        const blinkInterval = setInterval(() => setBlink(prev => !prev), 500);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div className="inicio" id="inicio">
            <div className="text-container">
                <h1>Myoel04.github.io</h1>
                <h2 className="typewriter">
                    {text}
                    <span className="cursor">{blink ? '|' : ' '}</span>
                </h2>
            </div>
            <div className="graphic-container"></div> {/* Actualiza la ruta de la imagen aquí */}
        </div>
    );
}

export default Inicio;
