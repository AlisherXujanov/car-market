"use client"

import "./style.scss";
import { useState } from 'react'

// HOOK  =>  is special ability that every component can use
// 
// useState  =>  [use=использовать,  state=состояние-память]
// each useState is unique for each component

// RULES:
// 1. Always import it from 'react' inside {...}
// 2. They should be initialized inside the component in top level
// 3. [useState]  =>  const [var, setVar] = useState(initialValue)

const Heading = ({ color, children }) => { // destructuring
    const [currentColor, setCurrentColor] = useState("red")
    // props  =>  properties  =>  это объект
    // props === { title: 'About page' }
    function updateColor(e) {
        setCurrentColor(e.target.value)
    }
    return (
        <h1 id="main-heading" style={{ color: currentColor }}>
            {children}
            <input type="color" onChange={updateColor} value={currentColor}/>
        </h1>
    );
}

// export const x = ({ a, b }) => {
//     return a + b
// }
export default Heading;
