import React from 'react';
import '../styles/skills.scss';
import { TiHtml5 } from "react-icons/ti";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiCss3, SiMongodb, SiGodotengine, SiKotlin } from "react-icons/si";

function Skills() {
    return (
        <div className="skills">
            <h1>SKILLS</h1>
            <div className="skill-grid">
                <div>
                    <TiHtml5 size={120} color="#E34F26"/>

                    {/* Representación del nivel de habilidades */}
                    <div className="stars">★★★★☆</div>
                </div>
                <div>
                    <SiCss3 size={120} color="#1572B6"/>

                    <div className="stars">★★★★☆</div>
                </div>
                <div>
                    <SiMongodb size={120} color="#4EA94B"/>

                    <div className="stars">★★★☆☆</div>
                </div>
                <div>
                    <SiKotlin size={120} color="#7F52FF"/>

                    <div className="stars">★★★☆☆</div>
                </div>
                <div>
                    <FaJava size={120} color="#007396"/>

                    <div className="stars">★★★★★</div>
                </div>
                <div>
                    <FaPython size={120} color="#3776AB"/>

                    <div className="stars">★★★★☆</div>
                </div>
                <div>
                    <SiGodotengine size={120} color="#478CBF"/>

                    <div className="stars">★★☆☆☆</div>
                </div>
                <div>
                    <FaReact size={120} color="#61DAFB"/>

                    <div className="stars">★★★★☆</div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
