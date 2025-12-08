import React from 'react';
import { createRoot } from 'react-dom/client';

import logo from '../public/assets/img/logo512.png';
import '../public/assets/css/styles.css'; 
//const stylesheet = <link rel="stylesheet" href="assets/css/styles.css" precedence="medium"/>
require('../public/assets/css/styles.css');

const App = function() {
    return (
        <div className="App">
            <header className="App-header">
              	<img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/app.js</code> and save to reload.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank"  rel="noopener noreferrer"></a>
            </header>
        </div>
    );
}

export default App;