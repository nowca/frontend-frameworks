'use strict';

function Message() {};

Message.prototype.render = function()
{
    return React.createElement(
        'p',
        {
            className: 'message'
        },
        `${this.props.messageText}`
    );
}

Object.setPrototypeOf(Message.prototype, React.Component.prototype);


function Button()
{
    this.state = {
        clicked: false
    };

    var _this = this;

    this.handleClick = function()
    {
        _this.setState({
            clicked: true
        });
    }
}

Button.prototype.render = function()
{
    if (this.state.clicked)
    {
        return React.createElement(
            'p',
            null,
            `You clicked the button`
        );
    }

    return React.createElement(
        'button',
        {
            className: 'button',
            onClick: this.handleClick
        },
        `Click here`
    );
}

Object.setPrototypeOf(Button.prototype, React.Component.prototype);


function Timer()
{
    this.state = {
        seconds: 0
    };

    var _this = this;

    this.tick = function()
    {
        _this.setState({
            seconds: _this.state.seconds + 1
        });
    }

    this.componentDidMount = function()
    {
        this.interval = setInterval(function() { _this.tick(); }, 1000);
    }
};

Timer.prototype.render = function()
{
    return React.createElement(
        'div',
        {
            className: 'timer'
        },
        'Seconds: ' + this.state.seconds
    );
}

Object.setPrototypeOf(Timer.prototype, React.Component.prototype);


function ReactExample() {};

ReactExample.prototype.render = function()
{
    return React.createElement(
        'div',
        {
            className: 'react-component-block'
        },
        createElement('p', { className: 'react-component-block-title' }, this.props.title),
        this.props.children
    );
}

Object.setPrototypeOf(ReactExample.prototype, React.Component.prototype);


const reactRoot = document.getElementById('react-root');
const createElement = React.createElement;

var App = createElement('div', { className: 'react-content' },
    createElement(ReactExample, { title: '<h1> headline tag:' },
        createElement('h1', { style: { textDecoration: 'underline' } }, 'Hello, world!')
    ),
    createElement(ReactExample, { title: '<p> paragraph Message:' },
        createElement(Message, { messageText: 'This app is using React version ' + React.version }, null)
    ),
    createElement(ReactExample, { title: 'Button with click state event:' },
        createElement('div', null,
            createElement(Button, { buttonText: 'Click here' }, null)
        )
    ),
    createElement(ReactExample, { title: 'Timer:' },
        createElement(Timer, null, null)
    )
);

// ReactDOM.render is no longer supported in React 18
// React 16+ also takes an array instead a single React.createElement
ReactDOM.render(App, reactRoot);


// The same examples without using the wrapper class ReactExample:

/*
ReactDOM.render(
    createElement('div', { className: 'react-content' },
        createElement('div', { className: 'react-component-block' },
            createElement('p', { className: 'react-component-block-title' }, '<h1> headline tag:'),
            createElement('h1', { style: { textDecoration: 'underline' } }, 'Hello, world!')
        ),
        createElement('div', { className: 'react-component-block' },
            createElement('p', { className: 'react-component-block-title' }, '<p> paragraph Message:'),
            createElement(Message, { name: 'This app is using React version ' + React.version }, null)
        ),
        createElement('div', { className: 'react-component-block' },
            createElement('p', { className: 'react-component-block-title' }, 'Button with click state event:'),
            createElement('p', null,
                createElement(Button, { buttonText: 'Click here' }, null)
            )
        ),
        createElement('div', { className: 'react-component-block' },
            createElement('p', { className: 'react-component-block-title' }, 'Timer'),
            createElement(Timer, null, null)
        )
    ),
    reactRoot
);
*/