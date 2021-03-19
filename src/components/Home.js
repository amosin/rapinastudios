import React from 'react'
import Logo from '../assets/logo.svg'
import ImageIntro from '../assets/imageIntro.svg'
import Typed from "react-typed"

const Home = () => {
    return (
        <div className="content-wrapper">
            <div className="main-info">
                <br></br>
                <div className="main-left">
                    <img className="main-logo" src={Logo} alt="Rapina Studios" />
                    <Typed className="typed-text"
                    strings={["<h4>In pursuit of integrating and making ordinary people fly on the wings of the blockchain technology in a fun way</h4>"]}
                    typeSpeed={40}
                    cursorChar=''
                    />
                        
                    </div>
                <div>
                    <div className="main-right">
                    <img className="image-intro" src={ImageIntro} alt="Rapina Studios" />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Home
