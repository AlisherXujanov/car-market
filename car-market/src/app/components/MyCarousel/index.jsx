'use client';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import BullsImg from "../../assets/images/bulls.png"
import ChainImg from "../../assets/images/chain.png"
import ChessImg from "../../assets/images/chess.png"
import HandsImg from "../../assets/images/hands.png"
import SnowImg from "../../assets/images/snow.png"


import Image from "next/image"
import "./style.scss"


function MyCarousel(props) {
    const slides = [
        { image: BullsImg, legend: "Bulls" },
        { image: ChainImg, legend: "Chain" },
        { image: ChessImg, legend: "Chess" },
        { image: HandsImg, legend: "Hands" },
        { image: SnowImg, legend: "Snow" }
    ]
    return (
        <Carousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            interval={5000}
            showStatus={false}
        >
            {
                slides.map(({ image, legend }, index) => {
                    return (
                        <div key={index} style={{ position: 'relative', width: '100%', height: '80vh' }}>
                            <div className="carousel-inner">
                                {props.children}
                            </div>

                            <Image
                                src={image}
                                alt={legend}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="100vw"
                            />
                        </div>
                    )
                })
            }
        </Carousel>
    );
}

export default MyCarousel;