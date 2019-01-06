import { BUY_ACORN, EAT_ACORN } from '../constants';

const initialState = {
  counter: 0,
};

export const acornReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ACORN: {
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    }
    case EAT_ACORN: {
      return {
        ...state,
        counter: Math.max(state.counter - action.amount, 0),
      };
    }
    default:
      return state;
  }
};
