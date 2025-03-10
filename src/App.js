import React from 'react';
import TopBar from './components/TopBar'; // Esta ya está correcta
import Inicio from './components/Inicio';
import SobreMi from './components/sobremi';
import Proyectos from './components/proyectos';
import Skills from './components/skills';
import Contacto from './components/contacto';
import './App.css';


function App() {
    return (
        <div className="App">
            <TopBar />
            <main className="main-content">
                <Inicio id="Inicio" />
                <div className="section-separator"></div>
                <SobreMi id="sobremi" />
                <div className="section-separator"></div>
                <Proyectos id="proyectos" />
                <div className="section-separator"></div>
                <Skills id="skills" />
                <div className="section-separator"></div>
                <Contacto id="contacto" />
            </main>
        </div>
    );
}

export default App;
