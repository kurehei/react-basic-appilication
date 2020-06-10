import React, { Component } from 'react';


//class App extends Component {
  // クラスコンポーネント
  //render() {
    // JSX内に変数も展開できる
    //return(
      //<React.Fragment>
        //<button type="button" onClick={()=>{window.alert("Click!!")}}></button>
        //<p>aa</p>
      //</React.Fragment>
    //)
  //}
//}

const App = function() {
  return <div>
          <Cat />
          <Cat />
          <Cat />
        </div>
}

const Cat = () => {
  return <div>
    Meow!
  </div>
}

export default App;
