import React from 'react'
import {Parallax} from "react-parallax";
import "./parallax.scss";
import img2 from "../../img/img2.webp"
import MainContainer from '../MainContainer/MainContainer';



export default function ItemListContainer({children}) {
    return (
        <div className='main-bg'>
            <Parallax bgImage={img2} strength={400}>
                <div className='outside-style' style={{height:"100vh"}}>
                    <div className='inside-style'>{children}</div>
                </div>
            </Parallax>
            <MainContainer/>
        </div>
    )
}
