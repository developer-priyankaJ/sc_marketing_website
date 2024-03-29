import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="parent-container">
        <div className="content-area">
  	        {this.props.children}
      	</div>
      </div>
    )
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App;
