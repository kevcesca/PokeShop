import React from 'react'
import './footer.scss'

export default function Footer() {
    return (
        <div>
            <footer className="container-fluid">
                <div className="row">
                    <ul className="d-flex flex-row justify-content-center align-items-center">

                        <li className="col-2 d-flex justify-content-center align-items-center flex-column mt-2">                            
                            <a href="https://www.linkedin.com/in/kevin-ceron-92a837245">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Facebooklogo" id="LinkedIn"></img>
                            </a>
                            <p className='twhite'>LinkedIn</p>
                        </li>

                        <li className="col-2 d-flex justify-content-center align-items-center flex-column mt-2">                   
                            <a href="https://github.com/kevcesca">
                                <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894__480.png" alt="Maillogo" id="GitHub"></img>
                            </a>
                            <p className='twhite'>GitHub</p>
                        </li>

                        <li className="col-2 d-flex justify-content-center align-items-center flex-column mt-2">                   
                            <a href="mailto:kevmicesca@gmail.com">
                                <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Maillogo" id="Mail"></img>
                            </a>
                            <p className='twhite'>Mail</p>
                        </li>

                        <li className="col-6">
                            <p className='twhite'>Derechos reservados - PokeShop 2023 © | Kevin Ceron Escalante</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
