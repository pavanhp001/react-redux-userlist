import React, { Component } from 'react';
import Loader from 'react-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "loaded": false,
    }
  }

  componentWillMount(){
    this.props.children && this.setState({"loaded": true})
  }
  render() {
    return (
      <div className="App">
          <Loader  loaded={this.state.loaded}>
            { this.props.children }
          </Loader>
      </div>
    );
  }
}

export default App;
