import React from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';


/* 01 ES6 Classes */
import { Car, Model } from './01-classes.jsx'
const mycar = new Model("Ford", "Mustang");

/* 02 ES6 Arrow Functions */
import { arrowFunc, SomeColor } from './02-arrow-functions.jsx'
window.addEventListener('DOMContentLoaded',function () {
	const mycolor = new SomeColor('Red');
	mycolor.changeColor();
});

/* 03 ES6 Variables */
import { x } from './03-variables.jsx'

/* 04 ES6 Array map() */
import { doubled, coloredThings } from './04-array-map.jsx'

/* 05 ES6 Modules */
import { name, age } from "./05-modules.jsx";
import { message } from "./05-modules.jsx";

/* 06 ES6 Template String */ 
import { name_t, age_t } from "./06-template-string.jsx";


const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<h1>ES6</h1>

		{ printExamples([
			<div>
				<h2>01 ES6 Classes:</h2><p>{ mycar.show() }</p>
			</div>,
			<div>
				<h2>02 ES6 Arrow Functions:</h2>
				<p id="demo">Blue</p>
				<p>{ arrowFunc(2, 3) }</p>
			</div>,
			<div>
				<h2>03 ES6 Variables:</h2>
				<p>x = { x }</p>
			</div>,
			<div>
				<h2>04 ES6 Array map():</h2>
				<ul>
					{ coloredThings.map((coloredThing, i) => (
						<li key={i} {...coloredThing} >{ coloredThing.color + " " + coloredThing.name }</li>
					)) }
		    	</ul>
			</div>,
			<div>
				<h2>05 ES6 Modules:</h2>
    			<p>{ message() }</p>
			</div>,
			<div>
				<h2>06 ES6 Template String:</h2>
    			<p>{name_t} is {age_t} years old.</p>
			</div>,
		]) }
	</React.StrictMode>
);