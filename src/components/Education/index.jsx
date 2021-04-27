import React from 'react'
import { education } from '../data.js'
import './Education.css'
import CV from "../../CV/CV EDGAR PALMA.pdf"

const Education = () => {
    return (
        <div className='container-fluid container2'>
            <h1>Educación + CV</h1>
            <div className= 'row justify-content-center'>
                {education.map((e, i) =>
                    <div key={i} className='card col-lg-4 col-sm-10 col-md-10 ml-md-1 mr-md-1 ml-sm-1 mr-sm-1 mb-md-2 mb-sm-2'>
                        <h3>{e.Title}</h3>
                        <a href={e.Link} style={{ textDecoration: "none" }}>{e.Institute}</a>
                        <p>{e.Duration}</p>
                        <p>{e.state}</p>
                    </div>
                )}
            </div>
            <button type="button" className="btn btn-primary btn1" data-bs-toggle="modal" data-bs-target="#modalCV" >Ver CV</button>
            <div className="modal cv" tabIndex="-1" id="modalCV" >
                <div className="modal-dialog Modal1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div className="modal-body">
                            <embed width="100%" height="600px" className="cv" src={CV} type="application/pdf" frameBorder="0" allowFullScreen />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Education;