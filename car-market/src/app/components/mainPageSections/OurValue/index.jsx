import Heading from "../../Heading"
import Image from "next/image"
import "./style.scss"

import BagImg from "../../../assets/vectors/bag.png"
import DiamondImg from "../../../assets/vectors/statistics.png"
import HandsImg from "../../../assets/vectors/diamond.png"
import StatisticsImg from "../../../assets/vectors/hands.png"


const images = [
    { id: 1, file: DiamondImg, title: "Стабильность", description: "Сохранность капитала клиентов приоритетнее доходности - каждое решение взвешено, обдумано и оценено." },
    { id: 2, file: StatisticsImg, title: "Устойчивость", description: "Устойчивое развитие — основа нашей бизнес-модели. Начиная с поиска и оценки предоставившихся возможностей для бизнеса до последовательного развития наших проектов и реаллокации капитала в новые возможности." },
    { id: 3, file: BagImg, title: "Команда", description: "Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда. Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть потенциал каждого сотрудника для достижения максимального результата." },
    { id: 4, file: HandsImg, title: "Репутация", description: "Ответственность и этика – основа нашей деятельности. Деятельность в рамках лучших практик (Корпоративный Кодекс этики и стандарты профессионального поведения) позволяет предлагать клиентам более качественные инвестиционные продукты, отвечающие высоким требованиям и ожиданиям самых требовательных клиентов." }
]


function ValueItem(props) {
    const { title, description, imageID } = props
    const image = images.find(image => image.id === imageID)

    return (
        <div className="value-item-wrapper">
            <span></span>
            <div className="item-left-side">
                <Image src={image.file} alt={title} />
            </div>
            <div className="item-right-side">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}


function OurValue() {
    return (
        <div className="our-value-wrapper">
            <Heading>Наши ценности</Heading>
            <div className="value-items-wrapper">
                {
                    images.map(img => {
                        return (
                            <ValueItem
                                title={img.title}
                                description={img.description}
                                imageID={img.id}
                                key={img.id}
                            />
                        )
                    })
                }
            </div>

        </div>
    );
}

export default OurValue;