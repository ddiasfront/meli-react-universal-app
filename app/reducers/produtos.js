import * as ActionType from 'actions/produtos'
import Immutable from 'immutable'

let data = {}

let defaultState = Immutable.fromJS(data)
function produtosReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionType.LOADED_PRODUTOS:
      let data = action.response;

      return state.merge(data);
      break
    case ActionType.SEARCHED_PRODUTOS:
      data = action.response;
      return state.merge(data);
      break
    default:
      return state
  }
}

export default produtosReducer
