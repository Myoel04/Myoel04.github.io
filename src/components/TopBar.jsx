import React, { useState, useEffect } from 'react';
import '../styles/TopBar.scss';
import { IoMdMenu } from "react-icons/io";

function TopBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY < 500;
            setOpacity(show ? 1 : Math.max(0.2, 1 - window.scrollY / 500));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="topbar" style={{ opacity }}>
            <div className="logo">Myoel04.github.io</div>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <IoMdMenu size={30} color="white" />
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
                <li><a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a></li>
                <li><a href="#sobremi" onClick={() => setIsOpen(false)}>Sobre Mi</a></li>
                <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default TopBar;