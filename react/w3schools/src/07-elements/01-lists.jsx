import React from 'react';
import { createRoot } from 'react-dom/client';

// React Lists
//
// simple list
export function MyCars()
{
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>My Cars1:</h1>
            <ul>
                { cars.map((car) => <li>I am a { car }</li>) }
            </ul>
        </>
    );
}

// Keys in React Lists
//
// Generally, the key should be a unique ID assigned to each item.
// As a last resort, you can use the array index as a key.
export function MyCars2()
{
    const cars = [
        {id: 1001, brand: 'Ford'},
        {id: 1002, brand: 'BMW'},
        {id: 1003, brand: 'Audi'}
    ];

    return (
        <>
            <h1>My Cars2:</h1>
            <ul>
                { cars.map((car) => <li key={car.id}>I am a { car.brand }</li>) }
            </ul>
        </>
    );
}

// Using Array Index as Keys
//
// While it's possible to use the array index as a key,
// it's not recommended unless:
//
//   - The list is static (won't change)
//   - The list will never be reordered or filtered
//   - The items in the list have no IDs
export function MyCars3() {
    const cars = ['Ford', 'BMW', 'Audi'];

    return (
        <>
            <h1>My Cars3:</h1>
            <ul>
                {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
            </ul>
        </>
    );
}