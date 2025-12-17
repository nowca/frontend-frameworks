import React from 'react';
import { createRoot } from 'react-dom/client';


const vehicles = ['mustang', 'f-150', 'expedition'];

// assigning

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// new way
const [car2, truck2, suv2] = vehicles;


// destructuring
function dateInfo(date)
{
	  const d = date.getDate();
	  const m = date.getMonth() + 1;
	  const y = date.getFullYear();

	  return [d, m, y];
}

const [date, month, year] = dateInfo(new Date());

// spread operator

const somenumbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = somenumbers;

console.log(somenumbers);


const numbers = [1, 2, 3, 4];
export const doubled = numbers.map(x => x * 2);

export const coloredThings = [
		{ 'color': 'red', 'name': 'rose' },
		{ 'color': 'green', 'name': 'leaf' },
		{ 'color': 'blue', 'name': 'water' },
		{ 'color': 'yellow', 'name': 'sun' },
		{ 'color': 'white', 'name': 'snow' },
		{ 'color': 'black', 'name': 'coal' }
]