import React, { Component } from 'react';
import Dropdown from '../src/dropdown.js';

export default class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liveKey: 2
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        console.log('选中了菜单' + key);
        this.setState({
            liveKey: key
        });
    }

    render() {
        return (
            <div>
                <Dropdown
                    title="Hover"
                    liveKey="2">
                    <Dropdown.Item eventKey="1" href="#">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="#">独家策略</Dropdown.Item>
                    <Dropdown.Item eventKey="3" href="#">测试</Dropdown.Item>
                </Dropdown>
                <Dropdown
                    title="Click"
                    liveKey="2"
                    trigger="click">
                    <Dropdown.Item eventKey="1" href="#">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="#">独家策略</Dropdown.Item>
                    <Dropdown.Item eventKey="3" href="#">测试</Dropdown.Item>
                </Dropdown>

                <hr/>

                <Dropdown
                    title="Bind Event"
                    trigger="click"
                    liveKey={this.state.liveKey}
                    onSelect={this.handleSelect}>
                    <Dropdown.Item eventKey="1">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2">独家策略</Dropdown.Item>
                    <Dropdown.Item eventKey="3">测试</Dropdown.Item>
                </Dropdown>
            </div>
        );
    }
}
