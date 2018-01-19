import React, { Component } from 'react';
import logo from '../logo.png';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>
                <div className='title'>React Boilerplate</div>
                <img className='logo' src={logo} />
            </div>
        );
    }
}