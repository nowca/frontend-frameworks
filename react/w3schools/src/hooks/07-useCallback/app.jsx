import React from 'react';
import { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../../ext.jsx';


// React useCallback Hook
//
// The useCallback Hook is used to memoize a callback function.
//
// Memoizing a function means caching the result of a function so that it does not need to be recalculated.
//
// The useCallback function only re-executes when one of its dependencies changes value.
//
// This allows us to isolate resource intensive functions so that they will not automatically run on every render


// The useCallback and useMemo Hooks are similar:
//
// useMemo returns a memoized value.
//
// useCallback returns a memoized function.


// Child component that receives a function prop
const Button = React.memo(({ onClick, text }) => {
    alert(`Child ${text} button rendered`);
    return <button onClick={onClick}>{text}</button>;
});

// Parent component without useCallback
function WithoutCallbackExample()
{
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // This function is recreated on every render
    const handleClick1 = () => {
        setCount1(count1 + 1);
    };

    const handleClick2 = () => {
        setCount2(count2 + 1);
    };

    alert("Parent rendered");

    return (
        <div>
            <h2>Without useCallback:</h2>
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
            <Button onClick={handleClick1} text="Button 1" />
            <Button onClick={handleClick2} text="Button 2" />
        </div>
    );
}

// Parent component with useCallback
function WithCallbackExample()
{
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // These functions are memoized and only recreated when dependencies change
    const handleClick1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1]);

    const handleClick2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);

    console.log("Parent rendered");

    return (
        <div>
            <h2>With useCallback:</h2>
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
            <Button onClick={handleClick1} text="Button 1" />
            <Button onClick={handleClick2} text="Button 2" />
        </div>
    );
}
/*
createRoot(document.getElementById('root')).render(
    <WithCallbackExample />
); */ 

function App()
{
    return (
        printExamples([
            <WithoutCallbackExample />,
            <WithCallbackExample />
        ])
    );
}

export default App;