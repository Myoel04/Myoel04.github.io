import React from 'react';
import TopBar from './Myoel04.github.io/components/TopBar';
import Inicio from './Myoel04.github.io/components/Inicio';
import SobreMi from './Myoel04.github.io/components/sobremi';
import Proyectos from './Myoel04.github.io/components/proyectos';
import Skills from './Myoel04.github.io/components/skills';
import Contacto from './Myoel04.github.io/components/contacto';
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
