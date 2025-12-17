import React from 'react';
import { createRoot } from 'react-dom/client';
import { forwardRef, useRef } from 'react';

import { printExamples } from '../ext.jsx';



// Forward Ref
//
// forwardRef lets your component pass a reference to one of its children.
// It's like giving a direct reference to a DOM element inside your component.
//
// Common uses for forwardRef:
//
//   - Focusing input elements
//   - Triggering animations
//   - Measuring DOM elements
//   - Integrating with third-party libraries

const MyInput = forwardRef((props, ref) => (
    <input ref={ref} {...props} />
));


// We wrap our input component with forwardRef
// The component receives a ref as its second parameter
// The parent can now control the input element directly
function ForwardRefApp()
{
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <MyInput ref={inputRef} placeholder="Type here..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

// React Higher Order Components
//
// HOCs are functions that take a component and
// return an enhanced version of that component.
// This is our HOC - it adds a border to any component
function withBorder(WrappedComponent)
{
    return function NewComponent(props)
    {
        return (
            <div style={{ border: '2px solid blue', padding: '10px' }}>
                <WrappedComponent {...props} />
            </div>
        );
    };
}

// Simple component without border
function Greeting({ name })
{
    return <h1>Hello, {name}!</h1>;
}

// Create a new component with border
const GreetingWithBorder = withBorder(Greeting);


function App()
{
    return (
        printExamples([
            <ForwardRefApp />,
            <div>
                <Greeting name="John" />
                <GreetingWithBorder name="Jane" />
            </div>
        ])
    );
}

export default App;