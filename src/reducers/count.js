import { INCREMENT, DECREMENT, DOUBLEADD } from '../actions';

const initialState = { value: 0 };
// valueを初期化

// 受け取ったアクションによって、stateが代わり、その結果をreturnで返す
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    case DOUBLEADD:
      return { value: state.value * 2 }
    default:
      return state
  }
}
