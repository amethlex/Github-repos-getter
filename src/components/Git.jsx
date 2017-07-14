/*
    ./client/components/Git.jsx
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Table, Icon } from 'antd';
import fetch from 'node-fetch';
import { observable, computed, action, runInAction } from "mobx";
import { inject, observer } from "mobx-react";

@inject("store") @observer
class Git extends React.Component {

    constructor(props)
    {
      super(props);

    }
    componentWillMount()
    {
      this.props.store.initialize();
    }
    handleSubmit(event)
    {   
      this.props.store.updateData();
    }
    handleChange(event)
    {
      this.props.store.updateValue(event);
    }
    render() {
        const columns = [{
          title: 'Index',
          dataIndex: 'index',
          key: 'index'
        }, {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        }];
      return (
      <div>
  	    <Row gutter={16}>
  	      <Col span={3}>Please input username:</Col>
  	      <Col span={6}><Input placeholder="username"  value = {this.props.store.value}  onChange = {e => this.handleChange(e)} /></Col>
          <Col span={3}><button onClick = {e => this.handleSubmit(e)}>Submit</button></Col>
  	    </Row>
          <div><Table columns={columns} dataSource={this.props.store.data.slice()} /></div>
    	</div>
      )
    }
}

export default Git