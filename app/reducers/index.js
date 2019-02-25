import { combineReducers } from 'redux'
import produtos from 'reducers/produtos'
import produtoDetail from 'reducers/produtoDetail'

const rootReducer = combineReducers({
  produtos,
  produtoDetail
})

export default rootReducer
