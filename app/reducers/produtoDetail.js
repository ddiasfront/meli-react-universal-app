import * as ActionType from 'actions/produtos'
import _ from 'lodash'
import Immutable from 'immutable'

let data = {}

let defaultState = Immutable.fromJS(data)
export default function(state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_PRODUCT_DETAIL:
      let data = action.response
      return state.concat(data)
    default:
      return state
  }
}
