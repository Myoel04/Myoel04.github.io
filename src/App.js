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

                <SobreMi id="sobremi" />

                <Proyectos id="proyectos" />

                <Skills id="skills" />

                <Contacto id="contacto" />
            </main>
        </div>
    );
}

export default App;
