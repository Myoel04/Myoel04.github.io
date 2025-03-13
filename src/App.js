import React from 'react';
import TopBar from './components/TopBar';
import Inicio from './components/Inicio';
import SobreMi from './components/sobremi';
import Proyectos from './components/proyectos';
import Skills from './components/skills';
import Contacto from './components/contacto';
import './App.css';

// A simple functional component for the separator
const SectionSeparator = () => {
    return <div className="section-separator" />;
};

function App() {
    // Array of sections for easier mapping
    const sections = [
        { Component: Inicio, id: "Inicio" },
        { Component: SobreMi, id: "sobremi" },
        { Component: Proyectos, id: "proyectos" },
        { Component: Skills, id: "skills" },
        { Component: Contacto, id: "contacto" },
    ];

    return (
        <div className="App">
            <TopBar />
            <main className="main-content">
                {sections.map(({ Component, id }, index) => (
                    <React.Fragment key={id}>
                        <Component id={id} />
                        {/* Render separator only after Inicio and Skills */}
                        {(id === "Inicio" || id === "skills") && index < sections.length - 1 && <SectionSeparator />}
                    </React.Fragment>
                ))}
            </main>
        </div>
    );
}

export default App;