import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useTransition } from 'react';

import { printExamples } from '../ext.jsx';



// What is useTransition?
//
// The useTransition hook helps you keep your
// React app responsive during heavy updates.
function SearchBar()
{
    const [text, setText] = useState('');
    const [results, setResults] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        // Urgent: Update input right away
        setText(e.target.value);

        // Non-urgent: Update search results
        startTransition(() => {
            setResults(e.target.value);
        });
    };

    return (
        <div>
            <input value={text} onChange={handleChange} />
            {isPending ? (
                <p>Loading...</p>
                ) : (
                <p>Search results for: {results}</p>
            )}
        </div>
    );
}

// When you type in the input field, it updates immediately
// The search results update is wrapped in startTransition
// While the results are updating, isPending is true
// The UI stays responsive even with many results
function SearchResults({ query })
{
    // Simulate slow search results
    const items = [];
    if (query)
    {
        for (let i = 0; i < 1000; i++)
        {
            items.push(<li key={i}>Result for {query} - {i}</li>);
        }
    }
    return <ul>{items}</ul>;
}

function SearchApp()
{
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        // Urgent: Update input field
        setInput(e.target.value);

        // Non-urgent: Update search results
        startTransition(() => {
        setQuery(e.target.value);
        });
    };

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={handleChange} 
                placeholder="Type to search..."
            />
            {isPending && <p>Loading results...</p>}
            <SearchResults query={query} />
        </div>
    );
}

function App()
{
    return (
        printExamples([
            <SearchApp />
        ])
    );
}

/*function App()
{
    return (
        printExamples([
            <SearchBar />
        ])
    );
}*/

export default App;