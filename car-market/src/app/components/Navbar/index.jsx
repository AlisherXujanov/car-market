"use client"

import "./style.scss";
import Image from "next/image"
import Heading from "../Heading"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        title: "О нас",
        href: "/about"
    },
    {
        title: "Команда",
        href: "/team"
    },
    {
        title: "Блог",
        href: "/blog"
    },
    {
        title: "Продукты",
        href: "/products"
    },
    {
        title: "Контакты",
        href: "/contacts"
    }
]

// let result = [1, 2, 3].map((item) => return (item * 2)) 
// console.log(result) // [2, 4, 6]


function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="top-navbar">
            <div className="left">
                <Link href="/">
                    <Heading size="h2">Fonte</Heading>
                </Link>
            </div>
            <div className="middle">
                {
                    links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                href={link.href}
                                key={link.title}
                                className={isActive ? "active" : ""}
                            >
                                {link.title}
                            </Link>
                        )
                    })
                }
            </div>
            <div className="right">
                <button className="login-btn accent-btn">Войти</button>
                <button className="lang-btn">
                    <u>Рус</u>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;