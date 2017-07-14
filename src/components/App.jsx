/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import Grid from 'components/Grid.jsx';
import Git from 'components/Git.jsx';
import STORE from "store";
import { Provider } from "mobx-react";

class App extends React.Component {
  render() {
    return (
      <div>
   		<Grid/>
        <Provider store={STORE}>
      			<Git/>
    		</Provider>
        	
      </div>
    );
  }
}

export default App
