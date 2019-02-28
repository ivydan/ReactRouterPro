/**
/**
 * @Emitte
 * 
 */
import React, { Component } from 'react';
import Select, { Option, OptGroup } from 'rc-select';
import RSelect from 'components/select';
import 'rc-select/assets/index.css';

export default class Introduce extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div>
                    测试：
                </div>
                <div>
                    <Select
                        style={{ width: 180 }}
                        bakcfill
                        multiple
                    >
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                        <Option value="a">a</Option>
                        <Option value="b">b</Option>
                    </Select>
                    <RSelect>

                    </RSelect>
                </div>
            </div>
        )
    }
}