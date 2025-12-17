import React from 'react';
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';

import MyFruits from './fruits.jsx'
import MyCars from './cars.jsx';

// Using Suspense with lazy Loading
const MyLazyCars = lazy(() => import('./cars.jsx'));

// Suspense
//
// Suspense is a React feature that lets your components display
// an alternative HTML while waiting for code or data to load.
//
// The most common use cases are:
//
//   - Data fetching with suspense-enabled frameworks
//   - Loading components dynamically with React.lazy()
function App()
{
    return (
        printExamples([
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    { /* The Fruits component takes two seconds to load */ }
                    <MyFruits />
                </Suspense>
            </div>,
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    { /* This example is too fast to see the loading message: */ }
                    <MyCars />
                </Suspense>
            </div>,
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <MyLazyCars />
                </Suspense>
            </div>
        ])
    );
}

export default App;