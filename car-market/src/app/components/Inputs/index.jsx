"use client"

import "./style.scss"
import { useState } from 'react'

function Inputs() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [color, setColor] = useState("")

    function handleInputChange(e) {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target
        switch (name) {
            case "username":
                setUsername(value)
                break
            case "password":
                setPassword(value)
                break
            case "color":
                setColor(value)
                break
            default:
                console.log("Invalid input")
                break
        }
    }
    return (
        <div className="container inputs-container">
            <div className="item-box">
                <h2>Username: {username}</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    name="username"
                    onChange={handleInputChange}
                />
            </div>
            <div className="item-box">
                <h2>Password: {password}</h2>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                />
            </div>
            <div className="item-box" style={{ backgroundColor: color }}>
                <h2>Color: {color}</h2>
                <input
                    type="color"
                    placeholder="Enter your favorite color"
                    value={color}
                    name="color"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default Inputs;



