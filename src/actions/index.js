export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DOUBLEADD = 'DOUBLEADD';

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const doubleAdd = () => {
  return {
    type: 'DOUBLEADD'
  }
}
