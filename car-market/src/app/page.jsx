import Link from "next/link";
import Heading from "./components/Heading";
import AboutSection from "./components/mainPageSections/AboutSection"
import MyCarousel from "./components/MyCarousel"
import OurValue from "./components/mainPageSections/OurValue"

function Home() {
  return (
    <>
      <MyCarousel>
        <h1>Хедж-фонд</h1>
        <p>Классический выбор профессиональных инвесторов с заданными умеренными параметрами риска. Основан на инвестировании в бумаги индекса S&P 500 с диверсификацией по 11 секторам экономики.</p>
        <button className="accent-btn">Подробнее</button>
      </MyCarousel>
      <AboutSection />
      <OurValue />
    </>
  )
}
export default Home