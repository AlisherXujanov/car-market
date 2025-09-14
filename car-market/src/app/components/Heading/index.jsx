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
    // props  =>  properties  =>  это объект
    // props === { title: 'About page' }
    return (
        <div className="container">
            <h1 id="main-heading" style={{ color: color }}>
                {children}
            </h1>
        </div>
    );
}

// export const x = ({ a, b }) => {
//     return a + b
// }
export default Heading;
