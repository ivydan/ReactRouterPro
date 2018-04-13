import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'test'
        }
    }

    render(){

        return <div>
            <h1>Todos</h1>
        </div>
    }
    
};
