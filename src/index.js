import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import List from './components/List.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  getChildContext(){
    return{muiTheme:getMuiTheme()}
  }
  render(){
    return(
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme:React.PropTypes.object.isRequired,
};
ReactDOM.render(<App/>,document.getElementById('app'));
