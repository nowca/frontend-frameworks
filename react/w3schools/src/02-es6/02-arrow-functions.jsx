import React from 'react';
import { createRoot } from 'react-dom/client';


export var arrowFunc = (x, y) => x * y;

export class SomeColor
{
    constructor(color)
    {
        this.color = color;
    }

    //Arrow function:
    changeColor = () => {
        document.getElementById("demo").innerHTML = this.color;
    }
}