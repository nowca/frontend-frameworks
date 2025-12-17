import React from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';

// React Router uses three main components for basic routing:
//
//   - Link: Creates navigation links that update the URL
//   - Routes: A container for all your route definitions
//   - Route: Defines a mapping between a URL path and a component
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function Home()
{
    return <h1>Home Page</h1>;
}

function Products()
{
    return (
        <div>
            <h1>Products Page</h1>
            <nav style={{ marginBottom: '20px' }}>
                { /* Nested Routes - You can have a Route inside another Route, this is called nested routes. */ }
                <Link to="/products/car">Cars</Link> |{" "}
                <Link to="/products/bike">Bikes</Link>
            </nav> 
            { /* The <Outlet /> element in the Products component specifies where to render the child route's content. */ }
            <Outlet /> 
        </div>
    );
}

function CarProducts()
{
    return (
        <div>
            <h2>Cars</h2>
            <ul>
                <li>Audi</li>
                <li>BMW</li>
                <li>Volvo</li>
            </ul>
        </div>
    );
}

function BikeProducts()
{
    return (
        <div>
            <h2>Bikes</h2>
            <ul>
                <li>Yamaha</li>
                <li>Suzuki</li>
                <li>Honda</li>
            </ul>
        </div>
    );
}

function Contact()
{
    return <h1>Contact Page</h1>;
}


// React Router is the standard routing library for React applications.
// It enables you to:
//
//   - Create multiple pages in your single-page application
//   - Handle URL parameters and query strings
//   - Manage browser history and navigation
//   - Create nested routes and layouts
//   - Implement protected routes for authentication
function App()
{
    return (
        printExamples([
            <BrowserRouter>
                {/* Navigation */}
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/products">Products</Link> |{" "}
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />}>
                        <Route path="car" element={<CarProducts />} />
                        <Route path="bike" element={<BikeProducts />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        ])
    );
}

export default App;