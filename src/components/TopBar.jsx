import React, { useState, useEffect, useRef } from 'react';
import '../styles/TopBar.scss';
import { IoMdMenu } from "react-icons/io";

function TopBar() {
    const [isOpen, setIsOpen] = useState(false);
    const topBarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 500;
            const newOpacity = Math.max(0, 1 - scrollPosition / maxScroll);
            console.log('Scroll position:', scrollPosition, 'Opacity:', newOpacity);
            if (topBarRef.current) {
                topBarRef.current.style.opacity = newOpacity;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="topbar" ref={topBarRef}>
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