import Link from "next/link";
import Image from "next/image";
import "./style.scss";
import Heading from "../components/Heading";
import AboutImage from "../assets/images/about-img.png";


function About() {
    return (
        <div className="about-page-container">
            <Heading title="О компании"></Heading>

            <p className="about-page-subtitle">
                Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого конкретного автомобиля.
            </p>

            <div className="image-container">
                <Image
                    src={AboutImage}
                    alt="About page image"
                />
                {/* <iframe 
                    src="https://www.youtube.com/embed/IpkzCH5FByw?controls=0&mute=1&autoplay=1"
                    width='100%'
                    height={350}
                ></iframe> */}
            </div>

        </div>
    );
}

export default About;