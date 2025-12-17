import React from 'react';
import { createRoot } from 'react-dom/client';

import { printExamples } from '../ext.jsx';

// Components in Files
import Vehicle from './vehicle.jsx';

// Components
//
// When creating a React component, the component's name MUST start
// with an upper case letter.
function Car(props) {
    // Arguments can be passed into a component as props,
    // which stands for properties.
    return (
        <h2>I am a {props.color} {props.brand || "Car"}!</h2>
    );
}

// We can refer to components inside other components:
function Garage() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            { /* Rendering a Component Twice */ }
            <Car brand="Ford" />
            <Car brand="BMW" />
        </>
    );
}


// Class Components
//
// When creating a React component, the component's name must
// start with an upper case letter.
class Motorcycle extends React.Component {
    // If your component has a constructor function, the props
    // should always be passed to the constructor and also to
    // the React.Component via the super() method.
    constructor(props) {
        // executes the parent component's constructor function,
        // and your component has access to all the functions of the
        // parent component (React.Component).
        super(props);

        // In React, component properties should be kept in an object
        // called state.
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    // To change a value in the state object,
    // use the this.setState() method.
    changeColor = () => {
        this.setState({color: "blue"});
        this.props.propColor = "";
    }

    // Props are like function arguments, and you send them into the component as attributes.
    render() {
        return (
            <div>
                <h2>Hi, I am a {this.props.propColor || this.state.color} {this.props.brand || "Motorcycle"}!</h2>
                <p>It is a {this.state.color} {this.state.model} from {this.state.year}.</p>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}


// Mounting
//
// Mounting means putting elements into the DOM.
//
// React has four built-in methods that gets called,
// in this order, when mounting a component:
//
//      constructor()
//      getDerivedStateFromProps()
//      render()
//      componentDidMount()
class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {favoritecolor: "red"};
    }

    // The getDerivedStateFromProps() method is called right
    // before rendering the element(s) in the DOM.
    //
    // This is the natural place to set the state object based
    // on the initial props.
    static getDerivedStateFromProps(props, state)
    {
        if (props.favcol)
        {
            return {favoritecolor: props.favcol };
        }
    }

    // The componentDidMount() method is called after the
    // component is rendered.
    //
    // This is where you run statements that requires that the
    // component is already placed in the DOM.
    componentDidMount()
    {
        setTimeout(() => {
            this.setState({favoritecolor: "blue"})
        }, 3000);
    }

    render()
    {
        return (
            <p>My Favorite Color is {this.state.favoritecolor}</p>
        );
    }
}

// Updating
//
// The next phase in the lifecycle is when a component is updated.
//
// A component is updated whenever there is a change in the
// component's state or props.
//
//      getDerivedStateFromProps()
//      shouldComponentUpdate()
//      render()
//      getSnapshotBeforeUpdate()
//      componentDidUpdate()
class Header2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {favoritecolor: "brown"};
    }

    // This is the first method that is called when a component gets
    // (!) updated.
    static getDerivedStateFromProps(props, state)
    {
        if (props.favcol)
        {
            return {favoritecolor: props.favcol };
        }
    }

    // In the shouldComponentUpdate() method you can return a Boolean
    // value that specifies whether React should continue with the rendering or not.
    shouldComponentUpdate()
    {
        return true;
    }

    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }

    // In the getSnapshotBeforeUpdate() method you have access to
    // the props and state before the update, meaning that even after
    // the update, you can check what the values were before the update.
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    }
    // you should also include the componentDidUpdate() method,
    // otherwise you will get an error.
    componentDidUpdate()
    {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }

    render()
    {
        return (
            <div>
                <p>My Favorite Color 2 is {this.state.favoritecolor}</p>
                <div id="div1"></div>
                <div id="div2"></div>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

function App() {
    return (
        printExamples([
            // Components
            <Car color="silver"/>,
            <Garage />,
            <Vehicle />,
            // Class Components
            <Motorcycle />,
            <Motorcycle propColor="black" brand="Honda"/>,
            // Mounting
            <Header favcol="yellow"/>,
            // Updating
            <Header2 />
        ])
    );
}

export default App;