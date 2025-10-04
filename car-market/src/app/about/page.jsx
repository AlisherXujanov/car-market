import Link from "next/link";
import Image from "next/image";
import "./style.scss";
import Heading from "../components/Heading";

// --- about
// --- --- page.jsx         => import "./style.scss"
//                          => import Heading from "@/components/Heading"
//                          => import Test from "../"
    // --- --- style.scss   => @use "@/assets/styles/_mixins.scss" as *;
// ---------------------------------------------------------------------
// --- components
// --- --- Heading
// --- --- --- index.jsx
// --- --- --- style.scss
// --- --- Test
// --- --- --- index.jsx    => import Heading from "../Heading"
// --- --- --- style.scss
// ---------------------------------------------------------------------

function About() {
    return (
        <div className="about-page-container">
            <Heading size="h2">
                О компании
            </Heading>
        </div>
    );
}

export default About;