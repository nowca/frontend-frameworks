import React from 'react';
import { createRoot } from 'react-dom/client';

export const name = "Tobias"
export const age = 18

const name2 = "Tobias"
const age2 = 18

export { name2, age2 }

export const message = () => {
    const name = "Tobias";
    const age = 41;
    return name + ' is ' + age + ' years old.';
};