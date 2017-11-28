import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class Main extends Component{
	constructor(props) {
		super(props);
		
	}

    onClick(){
        console.log(this.props);
        this.props.router.push('/helpCenter');
    }

    render(){
        return (
            <div>
                AAAAAAA
                <div onClick={this.onClick.bind(this)}>home</div>
            </div>
            )
    }
}

export default withRouter(Main);