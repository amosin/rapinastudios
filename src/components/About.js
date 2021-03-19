import React from 'react'
import Victor from '../assets/victor.png'
import Andre from '../assets/andre.png'
import Logo from '../assets/logo.svg'
import Carousel from "react-elastic-carousel";
import Item from "./CarouselAboutStyle";

const About = () => {
    return (
        <div className="content-wrapper">
            <div className="carousel-wrapper">
            <Carousel

            >
            <Item>
            <div className="main-info">
                <br></br>
                <div className="aboutLeft">
                <img className="main-logo" src={Logo} alt="Rapina Studios" />
                </div>
                <div className="aboutRight">
                    <h1>What is Rapina Studios?</h1><br />
                    <h3> Rapina Studios is a decentralized indie studio of games related to Blockchain and crypto innovation. This initiative was born in the year 2020 when I, AchtisticMan, another group of friends; gamers, programmers and some lovers of blockchain technology and with their skills we got together and thought of a way to contribute blockchain technology to the world. </h3>
                </div>
            </div>
            </Item>
            <Item>
            <div className="main-info">
                    <br></br>
                    <div className="aboutLeft">
                        <img className="ceo-logo" src={Victor}/>
                    </div>
                    <div className="aboutRight">
                        <h1>AchtisticMan (CEO, Artist and Programer)</h1> <br />
                        <h3> My name is Victor Falcão, I am a character designer and digital illustrator and creator of rapina studios, (an Art and Games studio focused on the “world of cryptocurrencies” ) in addition to being also a big enthusiast of blockchain technology, mainly games and nfts. with all my experience i intend to produce with my team simple, dynamic and fun content in order to facilitate people's access and learning to blockchain technology through art and games. </h3>
                    </div>
                </div>
            </Item>
            <Item>
            <div className="main-info">
                <br></br>
                <div className="aboutLeft">
                    <img className="ceo-logo" src={Andre}/>
                </div>
                <div className="aboutRight">
                    <h1>Andre Mosin (Full Stack Blockchain Developer)</h1> <br />
                    <h3><a href="https://www.linkedin.com/in/andremosin/"> More information...</a></h3>
                </div>
            </div>
            </Item>
            </Carousel>
            </div>




        </div>
    )
}


export default About
