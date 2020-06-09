import React, { Component } from 'react';


class App extends Component {
  render() {
    // JSX内に変数も展開できる
    return(
      <React.Fragment>
        <button type="button" onClick={()=>{window.alert("Click!!")}}></button>
        <p>aa</p>
      </React.Fragment>
    )
  }
}

export default App;
