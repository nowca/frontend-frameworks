import React from 'react';
import { useReducer } from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../../ext.jsx';


// The useReducer Hook is similar to the useState Hook.
//
// It allows for custom state logic.
//
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
const initialScore = [
    {
        id: 1,
        score: 0,
        name: "John",
    },
    {
        id: 2,
        score: 0,
        name: "Sally",
    },
];

// The reducer function contains your custom state logic and the initialStatecan be a simple value, but generally will contain an object. The init argument is optional and is used to initialize the state.
//
// The useReducer Hook returns the current stateand a dispatchmethod.
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return state.map((player) => {
                if (player.id === action.id) {
                  return { ...player, score: player.score + 1 };
                } else {
                  return player;
                }
            });
        default:
            return state;
    }
};

function Score()
{
    const [score, dispatch] = useReducer(reducer, initialScore);

    const handleIncrease = (player) => {
        dispatch({ type: "INCREASE", id: player.id });
    };

    return (
        <>
            {score.map((player) => (
            <div key={player.id}>
                <label>
                    <input
                        type="button"
                        onClick={() => handleIncrease(player)}
                        value={player.name}
                    />
                    {player.score}
                </label>
            </div>
            ))}
        </>
    );
}

function App()
{
    return (
        printExamples([
            <Score />
        ])
    );
}

export default App;