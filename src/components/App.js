import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, doubleAdd } from '../actions';


class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value{props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <button onClick={props.doubleAdd}>✖︎2</button>
      </React.Fragment>)
  }
}
// storeとコンポーネントのつなぎこみ
const mapStateToProps = state => ({
  value: state.count.value
})
// reducerにディスパッチとして伝える
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  doubleAdd: () => dispatch(doubleAdd())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
