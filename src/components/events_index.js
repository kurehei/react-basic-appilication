import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
//便利な関数をまとめて提供しているライブラリです。だからmapとか使用可能
import _ from 'lodash'


class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}
// storeとコンポーネントのつなぎこみ
const mapStateToProps = state => ({ events: state.events })
// reducerにディスパッチとして伝える
const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
