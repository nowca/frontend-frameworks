import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from "react";

import { printExamples } from '../ext.jsx';

// React has the same events as HTML: click, change, mouseover etc.
function Football()
{
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <div>
            <h1>Football</h1>
            <button onClick={shoot}>Take the shot!</button>
        </div>
    );
}

// Passing Arguments
//
//To pass an argument to an event handler, use an arrow function.
function Football2()
{
    const shoot = (a, event) => {
        alert(a);
        console.log(event);
    }

    return (
        <div>
            <h1>Football2</h1>
            <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
        </div>
    );
}



// setState
//
// useState hook not for class components !
class EventObject extends React.Component
{
    // mounting
    constructor(props)
    {
        super(props);

        this.state = {
            field1: 1,
            field2: 0,
            field3: "abc",
            field4: [ "aa", "bb", "cc" ],
            field5: "abc"
        }
    }

    changeValue = (value) => {
        //e.preventDefault();
        this.setState({field3 : value});
    }

    // before render / update
    static getDerivedStateFromProps(props, state)
    {
        state.field5 = "xyz"
    }

    // after render
    componentDidMount()
    {
        
    }

    render()
    {
        return (
            <div>
                <h1>EventObject</h1>
                <p><b>state:</b> {
                    Object.keys(this.state).map((key) => {
                        return <div>- {key}: { this.state[key] }</div>;
                    })
                }
                </p>
                <p><b>field4:</b> {
                    this.state.field4.map((key, i) =>
                        <li>{i}: {key}</li>)
                }
                </p>
                <button onClick={() => this.changeValue("ABC")}>change value (3)</button>
                <button onClick={ e => this.setState({ field1 : "40" }) }>change value (1)</button>
            </div>
        );
    }
}

// component function as class member with "useState trick"
class MyInlineHookExample extends React.Component {

    _renderCounter = () => () => {
        const [count, setCount] = useState(0);

        return <div>{ count }</div>
    }

    render() {
        const MyInlineHook = this._renderCounter();

        return(
            <div>
                <h1>MyInlineHookExample</h1>
                <MyInlineHook />
            </div>
        );
    }
}

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return <div>
        <h1>FavoriteColor</h1>
        <p>My favorite color is {color}</p>
        <button type="button" onClick={() => setColor("blue")}>Blue</button>
    </div>
}

function App()
{
    return (
        printExamples([
            <Football />,
            <Football2 />,
            <EventObject />,
            <MyInlineHookExample />,
            <FavoriteColor />
        ])
    );
}

export default App;