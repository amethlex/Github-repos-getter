/*
    ./client/components/Grid.jsx
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';

class Grid extends React.Component {
  render() {
    return (
	<div style={{ background: '#ECECEC', padding: '30px' }}>
	    <Card title="Github repos getter" bordered={false} style={{ width: 300 }}>
	      <p>Please input the username of Github username.</p>
	    </Card>
  	</div>
    );
  }
}

export default Grid