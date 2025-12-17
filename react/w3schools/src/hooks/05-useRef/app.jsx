import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../../ext.jsx';

// React useRef Hook
//
// The useRef Hook allows you to persist values between renders.
//
// It can be used to store a mutable value that does not cause
// a re-render when updated.

// If we tried to count how many times our application renders
// using the useState Hook, we would be caught in an infinite
// loop since this Hook itself causes a re-render.

function UseRefApp()
{
    const [inputValue, setInputValue] = useState("");
    // useRef() only returns one item.
    // It returns an Object called current.
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <p>Type in the input field:</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}

// The useRef Hook is often used to access DOM elements directly.
function UseRefAppDOMElement()
{
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

// Tracking State Changes
//
// The useRef Hook can also be used to keep track of previous state values.
//
// This is because we are able to persist useRef values between renders.
function AppTrackingStateChanges()
{
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}

function App()
{
    return (
        printExamples([
            <UseRefApp />,
            <UseRefAppDOMElement />,
            <AppTrackingStateChanges />
        ])
    );
}

export default App;