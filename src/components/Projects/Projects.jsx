import React from 'react';
import { projects } from '../data.js';
import './Projects.css';

const Projects = () => {
    console.log(projects[0].tecnologias)
    return (
        <>
            <div className="container">
                <h1 className="mt-2 mb-3">Proyectos</h1>
                <div className="row justify-content-center">
                    {projects.map((e, i) =>
                        <div className="col-lg-5 col-sm-8 projects-d">
                            <div key={i} className="card mb-3">
                                <h1>{e.name}</h1>
                                <span>{e.generalDescription}</span>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary btn1" data-bs-toggle="modal" data-bs-target={`#modal${e.target}`} >Detalles</button>
                                </div>
                                <div className="modal project" tabIndex="-1" id={`modal${e.target}`} >
                                    <div className="modal-dialog Modal1">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className='h-project-modal'>{e.name}</h3>
                                                <button className="btn-close" data-bs-dismiss="modal" ></button>
                                            </div>
                                            <div className="modal-body container-fluid">
                                                <div className="row">
                                                    <div className="col text-start">
                                                        <div>
                                                            <div className="p-description">
                                                                <span>{e.description}</span>
                                                            </div>
                                                            <ul>
                                                                {e.features.map((f, j) => <li key={j}>{f}</li>)}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h5>Tecnologías</h5>
                                                            <ul>
                                                                <div className="container">
                                                                    <div className="row">
                                                                        {e.tecnologias.map((f, j) =>
                                                                            <div key={j} className="col-5">
                                                                                <li>{f}</li>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="img-div">
                                                            <img className="img-project" src={e.image} alt="project-img" />
                                                        </div>
                                                        <div className="d-flex justify-content-around">
                                                            <button type="button" className="btn btn-primary btn1" onClick={() => window.open(e.repositorio)} >Repositorio</button>
                                                            {e.web?<button type="button" className="btn btn-primary btn1" onClick={() => window.open(e.web)} >Web</button>:null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>

        </>
    )
}

export default Projects
