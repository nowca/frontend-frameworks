import React from 'react';
import { createRoot } from 'react-dom/client';

class Car
{
    constructor(name)
    {
        this.brand = name;
    }

    present()
    {
        return 'I have a ' + this.brand;
    }
}

export class Model extends Car
{
    constructor(name, mod)
    {
        super(name);
        this.model = mod;
    }

    show()
    {
        return this.present() + ', it is a ' + this.model
    }
}

export default Car;