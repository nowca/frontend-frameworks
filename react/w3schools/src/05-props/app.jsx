import React from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';

// You can use myobj instead of props in the component:
function Car(myobj)
{
    return (
        <h2>1: I am a {myobj.brand}!</h2>
    );
}

// Pass Multiple Properties
// You can send as many properties as you want.
function Car2(props)
{
    return (
        <h2>2: I am a {props.color} {props.brand} {props.model}!</h2>
    );
}

// The component treats objects like objects,
// and you can use the dot notation to access the properties.
function Car3(props)
{
    return (
    <>
        <h2>3: My {props.carinfo.name} {props.carinfo.model}!</h2>
        { /* Array props can be accessed using the indexes. */ }
        <p>It is {props.carinfo.color} and it is from {props.years[0]}!</p>
    </>
    );
}

// You can limit the properties a component receives by using destructuring.
function Car4({color})
{
    return (
        <h2>4: My car is {color}!</h2>
    );
}

// You can also destruct the properties you need inside the component.
function Car5(props)
{
    const {brand, model} = props;
        return (
        <h2>5: I love my {brand} {model}!</h2>
    );
}

// When you don't know how many properties you will receive, you can use the ...rest operator.
function Car6({color, brand, ...rest})
{
    return (
        <h2>6: My {brand} {rest.model} is {color}!</h2>
    );
}

// Default Values
function Car7({color = "blue", brand})
{
    return (
        <h2>7: My {color} {brand}!</h2>
    );
}

// Props Children
//
// In React, you can send the content between the opening
// and closing tags of a component, to another component.
function Son(props)
{
    return (
    <div style={{background: 'lightgreen'}}>
        <h2>Son</h2>
        <div>{props.children}</div>
    </div>
    );
}

function Daughter(props)
{
    const {brand, model} = props;
    return (
        <div style={{background: 'lightblue'}}>
            <h2>Daughter</h2>
            <div>{props.children}</div>
        </div>
    );
}

function Parent()
{
    return (
    <div>
        <h1>My two Children</h1>
        <Son>
        <p>
            This was written in the Parent component,
            but displayed as a part of the Son component
        </p>
        </Son>
        <Daughter>
        <p>
            This was written in the Parent component,
            but displayed as a part of the Daughter component
        </p>
        </Daughter>
    </div>
    );
}

// Objects and Arrays has to be sent inside curly brackets:
let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

function App()
{
    return (
        printExamples([
            // React Props are like function arguments in JavaScript
            // and attributes in HTML.
            <Car brand="Ford" />,
            <Car2 brand="Ford" model="Mustang" color="red" />,
            <Car3 years={x} carinfo={y} />,
            <Car4 brand="Ford" model="Mustang" color="red" year={1969} />,
            <Car5 brand="Ford" model="Mustang" color="red" year={1969} />,
            <Car6 brand="Ford" model="Mustang" color="red" year={1969} />,
            <Car7 brand="Ford" />,
            <Parent />
        ])
    );
}

export default App;