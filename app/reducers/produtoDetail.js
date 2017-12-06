import * as ActionType from 'actions/produtos'
import _ from 'lodash'
import Immutable from 'immutable'

let data = {
  productDetail: '',
  productDesct: ''
}

let defaultState = Immutable.fromJS(data)
export default function(state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_PRODUCT_DETAIL:
      data.productDetail = action.response
      return state.merge(data)
    case ActionType.LOADED_PRODUCT_DESC:
      data.productDesct = action.response
      return state.merge(data)
    default:
      return state
  }
}
