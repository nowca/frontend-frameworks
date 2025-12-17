import React from 'react';
import { createRoot } from 'react-dom/client';

import App_1 from './app-1.jsx'
import App_2 from './app-2.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App_2></App_2>
	</React.StrictMode>
);