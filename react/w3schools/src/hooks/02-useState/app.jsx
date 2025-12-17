import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../../ext.jsx';

// useState
//
// The React useState Hook allows us to track state in a function component.
//
// State generally refers to data or properties that
// need to be tracking in an application.
function FavoriteColor()
{
    // useState accepts an initial state and returns two values:
    //
    // The current state.
    // A function that updates the state.
    const [color, setColor] = useState("red");

    // Read State
    //
    // We can now include our state anywhere in our component.
    return <div>
        <h1>My favorite color is {color}!</h1>
        { /* Use the state updater function to update the state: */ }
        <button
            type="button"
            onClick={() => setColor("blue")}
        >Blue</button>
    </div>
}

// The useState Hook can be used to keep track of strings,
// numbers, booleans, arrays, objects, and any combination of these!
function MyCar()
{
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    // Or, we can just use one state and include an object instead!
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    // Updating Objects and Arrays in State
    //
    // When state is updated, the entire state gets overwritten.
    //
    // What if we only want to update the color of our car?
    //
    // If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
    //
    // We can use the JavaScript spread operator to help us.
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }

    return (
        <>
            <h1>My {brand}</h1>
            <p>It is a {color} {model} from {year}.</p>
            <p>It is a {car.color} {car.model} from {car.year}.</p>
            <button
                type="button"
                onClick={updateColor}
            >Blue</button>
        </>
    )
}

function App()
{
    return (
        printExamples([
            <FavoriteColor />,
            <MyCar />
        ])
    );
}

export default App;