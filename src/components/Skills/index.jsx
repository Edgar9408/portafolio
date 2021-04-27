import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faJava, faReact, faHtml5, faCss3Alt, faJs, faBootstrap, faNode } from '@fortawesome/free-brands-svg-icons'
import Scrum from '../../Img/Scrum.png'
import Graphql from '../../Img/graphql.png'
import './Skills.css'

const Skills = () => {
    return (
        <div className='containerSkills container'>
            <div className='Title'>
                <h1>Mis Habilidades</h1>
            </div>
            <div className='grid-iconos row justify-content-center'>
            <div className='Skill col-sm-5 col-lg-2'>
                    <h4>React</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">React</div>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Redux</div>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Hooks</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-2" icon={faReact} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>NodeJS</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">NodeJS</div>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Express</div>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Sequelize</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-2" icon={faNode} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>HTML</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">HTML</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-3" icon={faHtml5} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>CSS</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">CSS</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-3" icon={faCss3Alt} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>JavaScript</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">JavaScript</div>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">TypeScript</div>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Jquery</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-2" icon={faJs} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>Bootstrap</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Bootstrap</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-3" icon={faBootstrap} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>Bases de datos</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">PostgreSQL</div>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">MySQL</div>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">MongoDB</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-1" icon={faDatabase} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>Graphql</h4>
                    <div className="TextHover">
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Graphql</div>
                            </div>
                        </div>
                    </div>
                    <img className='scrum' src={Graphql} alt='' />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>Java</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Java</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-3" icon={faJava} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>Git</h4>
                    <div className='TextHover'>
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">GitHub</div>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="mr-3" icon={faGithub} size="10x" />
                </div>
                <div className='Skill col-sm-5 col-lg-2'>
                    <h4>Scrum</h4>
                    <div className="TextHover">
                        <div className="container1">
                            <div className="container-btn">
                                <div className="Colision" id="a">Scrum</div>
                            </div>
                        </div>
                    </div>
                    <img className='scrum' src={Scrum} alt='' />
                </div>
            </div>
        </div>
    )
}
export default Skills;