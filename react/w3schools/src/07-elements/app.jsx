import React from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';

import * as Lists from './01-lists.jsx';
import * as Forms from './02-forms.jsx';


function App()
{
    return (
        printExamples([
            <Lists.MyCars />,
            <Lists.MyCars2 />,
            <Lists.MyCars3 />,
            <Forms.MyForm />,
            <Forms.MyForm2 />,
            <Forms.MyFormClass />,
            <Forms.MyForm3 />,
            <Forms.MyTextarea />,
            <Forms.MySelectForm />,
            <Forms.MyMultipleInputForm />,
            <Forms.MyCheckboxForm />,
            <Forms.MyRadioForm />,
        ])
    );
}

export default App;