import React, { Component } from 'react';
import _ from 'lodash';
import { Input, Button, Icon } from 'antd';
import { branch } from 'baobab-react/higher-order';
import Commons from 'utils/common';
import actions from '../utils/action';


class About extends React.Component {
	constructor(props) {
		super(props);
		Commons.initComponent(this, { actions });

        _.bindAll(this, '_handleChangeLock')
	}

	_handleChangeLock(e) {
        let value = e.target.value;
        this.dispatch("changePassWord", value);
    }

	componentDidMount(){
	}

	render() {
		return (
			<div className="AboutContain">
				<div>About</div>
			</div>
		)
	}
}

export default branch({
    data: ['page']
}, About)