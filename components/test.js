import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class Test extends Component{

    onClick(){
        console.log(this.props);
        this.props.router.push('/helpCenter');
    }

    render(){
        return (
            <div>
                Test
            </div>
            )
    }
}

export default withRouter(Test);