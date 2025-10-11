import Heading from "../../Heading"
import AboutSectionImg from "../../../assets/images/about-1.png"
import LicenceIcon from "../../../assets/vectors/licence.png"
import DownloadableLicence from "../../../assets/certificates/2.jpg"
import AnimatedMarquee from "../../AnimatedMarquee"
import Image from "next/image"
import "./style.scss"

function AboutSection() {
    return (
        <>
            <div className="about-section-wrapper">
                <Heading>О нас</Heading>

                <div className="about-section-content">
                    <div className="left">
                        <Image
                            src={AboutSectionImg}
                            alt="About section image"
                            width={"100%"} height={500}
                        />
                    </div>
                    <div className="right">
                        <p>
                            Наша Команда успешно осуществляет деятельность на нескольких рынках инвестиций. Богатство выбора инструментов этих рынков позволяет Нам успешно сохранять и преумножать капитал клиентов.
                        </p>

                        <p>
                            Вступить в партнерство с Fonte могут как профессиональные инвестора, так и частные лица, только начинающие открывать для себя новые перспективы. Наша юрисдикция - Международный финансовый центр «Астана» (МФЦА). Комфортные налоговые условия и регуляторные политики обеспечивают необходимые свободы и преимущества для достижения целей инвестиций.
                        </p>

                        <p>
                            В партнерстве с Fonte Capital LTD, инвесторы имеют возможность воспользоваться не только проверенными стратегиями, но и смогут совместно разработать персональные инвестиционные решения.
                        </p>


                        <a className="accent-btn" href={DownloadableLicence.src} target="_blank" download>
                            <Image src={LicenceIcon} alt="Licence icon" />
                            Лицензии
                        </a>
                    </div>
                </div>

            </div>
            <AnimatedMarquee />
        </>
    );
}

export default AboutSection;