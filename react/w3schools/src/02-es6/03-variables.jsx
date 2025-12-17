import React from 'react';
import { createRoot } from 'react-dom/client';

export var x = 10;
// Here x is 10
console.log('x: ' + x);

{
	let x = 2;
	// Here x is 2
	console.log('x: ' + x);
}

// Here x is 10
console.log('x: ' + x);