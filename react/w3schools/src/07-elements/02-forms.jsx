import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

// HTML Forms vs. React Forms
//
// In React, the value of the form element is kept in the
// component's state property and updated only with the
// setState() function.
export function MyForm()
{
    return (
        <form>
            <h1>MyForm</h1>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}

// Controlled Components
//
// In a controlled component, form data is handled by the
// React component.
//
// The value of the input element is driven by the React state,
// and any changes to that value are managed through event handlers
// that update the state.
export function MyForm2()
{
    // useState for component functions
    const [name, setName] = useState("initial value");

    function handleChange(e)
    {
        setName(e.target.value);
    }

    return (
        <form>
            <h1>MyForm2</h1>
            <label>Enter your name:
                <input
                    type="text" 
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <p>Current value: {name}</p>
        </form>
    )
}

// class not using useState
export class MyFormClass extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name: "my name"
        }
    }

    handleChange = (e) => {
        //e.preventDefault();
        this.setState({name : e.target.value});
    }

    render()
    {
        return (
            <form>
                <h1>MyFormClass</h1>
                <label>Enter your name:
                    <input
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <p>Current value: {this.state.name}</p>
            </form>
        )
    }
}

// Submitting Forms
//
// You can control the submit action by adding an event handler in
// the onSubmit attribute for the <form>
export function MyForm3()
{
    const [name, setName] = useState("");

    function handleChange(e)
    {
        setName(e.target.value);
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        alert(name);
    }

    return (
    <form onSubmit={handleSubmit}>
        <h1>MyForm3</h1>
        <label>Enter your name:
            <input
              type="text" 
              value={name}
              onChange={handleChange}
            />
        </label>
        <input type="submit" />
    </form>
    )
}

// React Forms - Textarea
export function MyTextarea() {
    const [mytxt, setMytxt] = useState("");

    function handleChange(e)
    {
        setMytxt(e.target.value);
    }

    return (
        <form>
            <h1>MyTextarea</h1>
            <label>Write here:
                <textarea
                    value={mytxt}
                    onChange={handleChange}
                />
            </label>
            <p>Current value: {mytxt}</p>
        </form>
    )
}

// Select
//
// In HTML, the selected value in the drop down list is defined
// with the selected attribute.
//
// In React, the selected value is defined with a value
// attribute on the select tag
export function MySelectForm()
{
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <h1>MySelectForm</h1>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <p>Current value: {myCar}</p>
        </form>
    )
}

// Handling Multiple Inputs
//
// When you have multiple controlled input fields in a form,
// you can manage their state either by:
//
// 1. Using a separate useState call for each input.
//
// 2. Using a single useState call with an object to hold all
//    form field values.
export function MyMultipleInputForm()
{
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <form>
            <h1>MyMultipleInputForm</h1>
            <label>First name:
                <input 
                    type="text" 
                    name="firstname" 
                    value={inputs.firstname} 
                    onChange={handleChange}
                />
            </label>
            <label>Last name:
                <input 
                    type="text" 
                    name="lastname" 
                    value={inputs.lastname} 
                    onChange={handleChange}
                />
            </label>
            <p>Current values: {inputs.firstname} {inputs.lastname}</p>
        </form>
    )
}

// Checkbox
//
// For checkboxes, use the checked attribute instead of value to
// control its state.
export function MyCheckboxForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        let fillings = '';
        if (inputs.tomato) fillings += 'tomato';
        if (inputs.onion)
        {
            if (inputs.tomato) fillings += ' and ';
            fillings += 'onion';
        }
        if (fillings == '') fillings = 'no fillings';
        alert(`${inputs.firstname} wants a burger with ${fillings}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>MyCheckboxForm</h1>
            <label>My name is:
                <input 
                type="text" 
                name="firstname" 
                value={inputs.firstname} 
                onChange={handleChange}
                />
            </label>

            <p>I want a burger with:</p>
            <label>Tomato:
                <input 
                type="checkbox" 
                name="tomato" 
                checked={inputs.tomato} 
                onChange={handleChange}
                />
            </label>
            <label>Onion:
                <input 
                  type="checkbox" 
                  name="onion" 
                  checked={inputs.onion} 
                  onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

// Radio
export function MyRadioForm() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        /> Apple
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} 
        /> Banana
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="cherry" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} 
        /> Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}