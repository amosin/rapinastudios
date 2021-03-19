import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./CarouselNftStyle";
import Nft1 from "../assets/nft1.svg";
import NftLogo from "../assets/nft.svg"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

const Nft = () => {
    return (
        <div className="content-wrapper">
            <div className="nftlogo">
            <img src={NftLogo} alt="Rapina Studios" />
            </div>
            <div className="carousel-wrapper">
            <Carousel
            breakPoints={breakPoints}
            >
            <Item>
                <img className="nft1" src={Nft1} alt="Rapina Studios" />
            </Item>
            <Item>
                <img className="nft2" src={Nft1} alt="Rapina Studios" />
            </Item>
            <Item>
                <img className="nft3" src={Nft1} alt="Rapina Studios" />
            </Item>
            </Carousel>
            </div>

        </div>
    )
}

export default Nft
