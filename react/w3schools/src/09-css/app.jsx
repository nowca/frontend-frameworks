import React from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';

import './MyStylesheet.css';
// import styles from './my-style.module.css'; 

const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
};


function App()
{
    return (
        printExamples([
            <div>
                { /* Inline Styling */ }
                <h1 style={{backgroundColor: "black", color: "lightblue"}}>Hello Style!</h1>
            </div>,
            <div>
                <h1 style={myStyle}>Hello Style!</h1>
            </div>
            /* undefined error, webpack css-loader options */
            /*<div>
                <h1 className={styles.bigred}>Hello Car!</h1>
            </div>*/
        ])
    );
}

export default App;