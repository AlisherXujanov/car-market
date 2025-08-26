import Link from "next/link";
import "./style.scss";

function About() {
    return (
        <div className="about-page-container">
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor voluptate repellat enim doloremque quibusdam ducimus vero fugiat repellendus tempore id incidunt amet praesentium expedita nobis, consequuntur sunt. Accusantium, adipisci.</p>
            <Link href="/">Home</Link>
        </div>
    );
}

export default About;