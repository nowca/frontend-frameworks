import React from 'react';
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../../ext.jsx';

// React useEffect Hooks
//
// The useEffect Hook allows you to perform side effects in your components.
//
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
//
// useEffect accepts two arguments. The second argument is optional.
//
// useEffect(<function>, <dependency>)

function Timer()
{
    const [count, setCount] = useState(0);

    // useEffect runs on every render. That means that when the count
    // changes, a render happens, which then triggers another effect.
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    // 1. No dependency passed:
    // useEffect(() => {
        // Runs on every render
    // });

    // 2. An empty array:
    // useEffect(() => {
        // Runs only on the first render
    // }, []);

    // useEffect(() => {
        // Runs on the first render
    // And any time any dependency value changes
    // }, [prop, state]);

    return <h1>I've rendered {count} times!</h1>;
}

// Here is an example of a useEffect Hook that is dependent on a
// variable. If the count variable updates, the effect will run again:
function Counter()
{
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}

// Some effects require cleanup to reduce memory leaks.
//
// Timeouts, subscriptions, event listeners, and other effects
// that are no longer needed should be disposed.
function Timer2()
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    return <h1>I've rendered {count} times!</h1>;
}

function App()
{
    return (
        printExamples([
            <Timer />,
            <Counter />,
            <Timer2 />,
        ])
    );
}

export default App;