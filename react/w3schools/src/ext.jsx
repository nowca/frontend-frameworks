import React from 'react';

// print the example in formatted box,
// takes the array wit hcomponents as argument
export function printExamples(components)
{
    return components.map((el) => (console.log(el) || <div className="example">{el}</div>) );
}