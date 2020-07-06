import _ from 'lodash'
import { READ_EVENTS } from '../actions';

// valueを初期化

// 受け取ったアクションによって、stateが代わり、その結果をreturnで返す
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}
