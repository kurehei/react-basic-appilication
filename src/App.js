import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0}
    this.state = { count2 : 1}
  }

  handlePlusButton = () => {
    //console.log(this.state.count);
    // setStateは状態の管理
    // setStateを使用することで、状態変更時に再レンダリングされる。
    this.setState({ count: this.state.count + 1 });
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count -1});
  }

  handleChangeButton = () => {
    this.setState({ count2: this.state.count2 * 2 })
  }
  render() {
  return (
    <React.Fragment>
      <div>counter{ this.state.count }</div>
      <div>2倍になるボタン{ this.state.count2 }</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={ this.handleMinusButton }>-1</button>
      <button onClick={ this.handleChangeButton }>×２</button>
    </React.Fragment>)
  }
}

export default App;
