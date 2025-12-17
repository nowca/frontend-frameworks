import React from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';

import './MyStyle.scss';
import './MyStyle2.scss';

function MyHeader()
{
    return (
        <h1>My Header</h1>
    );
}

function MyHeader2() {
    return (
        <div className="moduleClass">
            <h1>My Header 1</h1>
            <h2>My Header 2</h2>
            <h3>My Header 3</h3>
        </div>
    );
}

function App()
{
    return (
        printExamples([
            <MyHeader />,
            <MyHeader2 />
        ])
    );
}

export default App;