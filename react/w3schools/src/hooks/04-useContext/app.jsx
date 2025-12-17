import React from 'react';
import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../../ext.jsx';

// React Context
// React Context is a way to manage state globally.
//
// It can be used together with the useState Hook to
// share state between deeply nested components more easily
// than with useState alone.

// State should be held by the highest parent component in the
// stack that requires access to the state.
//
// we will need to pass the state as "props" through each nested
// component. This is called "prop drilling".
function ParentComponent1()
{
    const [user, setUser] = useState("Linus");

    return (
        <>
            <h1>{`Hello ${user}!`}</h1>
            <ChildComponent2 user={user} />
        </>
    );
}

function ChildComponent2({ user })
{
    return (
        <>
            <h1>Component 2</h1>
            <ChildComponent3 user={user} />
        </>
    );
}

function ChildComponent3({ user })
{
    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

// Next we'll use the Context Provider to wrap the tree of components
// that need the state Context.
const UserContext = createContext();

// Wrap child components in the Context Provider and supply the state value.
function ContextParentComponent1()
{
    const [user, setUser] = useState("Linus");

    // Now, all components in this tree will have access to the user Context.
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <ContextChildComponent2 />
        </UserContext.Provider>
    );
}

function ContextChildComponent2()
{
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 2</h1>
            <ContextChildComponent3 />
        </>
    );
}

function ContextChildComponent3()
{
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

function App()
{
    return (
        printExamples([
            <ParentComponent1 />,
            <ContextParentComponent1 />
        ])
    );
}

export default App;