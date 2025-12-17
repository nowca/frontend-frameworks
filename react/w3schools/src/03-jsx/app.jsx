import React from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';

// Coding JSX
const myElementWithJsx = <h2>I Love JSX!</h2>;
const myElementWithoutJsx = React.createElement('h2', {}, 'I do not use JSX!');

// Expressions in JSX
const myElementExpression = <h2>React is {5 + 5} times better with JSX</h2>;

// Inserting a Large Block of HTML
const myElementBlock = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

// One Top Level Element
const myElementTopLevel = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

// Elements Must be Closed
const myElementClosed = <input type="text" />;

// Attribute class = className
const myElementClassName = <h2 className="myclass">Hello World</h2>;

// Comments in JSX
const myElementCommented = <h2>Hello {/* Wonderful */} World </h2>;

// JSX in React Components
function MyElementComponent() {
    const brand = "Ford";
    const model = "Mustang";
    return (
        <>
            <h2>My Car</h2>
            <p>It is a {brand} {model}.</p>
        </>
    );
}

// Expressions
const hp = 218 * 1.36;
var kwtohp = (kw) => kw * 1.36;

// Attributes
const x = "myclass";
const myfunc = () => {
    alert('Hello World');
};
const mystyles = {
    color: "blue",
    fontSize: "20px",
    backgroundColor: "lightblue",
  };


function App() {
    return (
        printExamples([
            // JSX Intro
            <h1>JSX Intro</h1>,
            myElementWithJsx,
            myElementWithoutJsx,
            myElementExpression,
            myElementBlock,
            myElementTopLevel,
            myElementClosed,
            myElementClassName,
            myElementCommented,
            <MyElementComponent />,
            // Expressions
            <p>It has {218 * 1.36} horsepower</p>,
            <p>It has {hp} horsepower</p>,
            <p>It has {kwtohp(218)} horsepower</p>,
            // Attributes
            <h2 className={x}>Hello World</h2>,
            <button onClick={myfunc}>Click me</button>,
            <h2 style={mystyles}>My car</h2>
        ])
    );
}

export default App;