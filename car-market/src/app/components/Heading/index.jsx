"use client"

import "./style.scss";
import Image from "next/image"
import HeadingVector from "../../assets/vectors/heading.png"

const Heading = ({ children, size = "h1", gray = false }) => { // destructuring
    let headingSize = 0
    switch (size.toLowerCase()) {
        case "h1":
            headingSize = 32
            break
        case "h2":
            headingSize = 24
            break
        case "h3":
            headingSize = 20
            break
        case "h4":
            headingSize = 18
            break
        case "h5":
            headingSize = 16
            break
        case "h6":
            headingSize = 14
            break
    }

    return (
        <h1 className="custom-heading" style={{ fontSize: headingSize + "px" }}>
            <Image src={HeadingVector} alt="Heading vector" />
            {children}
        </h1>
    );
}
export default Heading;
