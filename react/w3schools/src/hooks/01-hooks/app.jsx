import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../../ext.jsx';

// Hooks
//
// Hooks are functions that let you "hook into" React state
// and lifecycle features from functional components.
//
// Hooks allow functions to have access to state and other
// React features without using classes.
// 
// They provide a more direct API to React concepts like props,
// state, context, refs, and lifecycle.
function FavoriteColor()
{
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
        </>
    );
}

function App()
{
    return (
        printExamples([
            <FavoriteColor />,
        ])
    );
}

export default App;