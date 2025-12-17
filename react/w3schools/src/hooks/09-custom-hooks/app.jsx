import React from 'react';
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../../ext.jsx';

// React Custom Hooks
// You can make your own Hooks!
//
// When you have components that can be used by multiple components, we can extract that component into a custom Hook.
//
// Custom Hooks start with "use". Example: useFetch.

// In the following code, we are fetching data from a URL and displaying it.
//
// We will use the JSONPlaceholder service to fetch some fake data.
const HomeWithoutCustomHook = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            {data &&
            data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
};

// The logic behind the fetch may be needed in other components as well, so we will turn that into a custom Hook.
import useFetch from "./useFetch.jsx";


const HomeWithCustomHook = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data &&
            data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
};


function App()
{
    return (
        printExamples([
            <HomeWithoutCustomHook />,
            <HomeWithCustomHook />
        ])
    );
}

export default App;