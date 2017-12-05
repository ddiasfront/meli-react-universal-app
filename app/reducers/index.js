import { combineReducers } from 'redux'
import questions from 'reducers/questions'
import questionDetail from 'reducers/questionDetail'
import produtos from 'reducers/produtos'
import produtoDetail from 'reducers/produtoDetail'

const rootReducer = combineReducers({
  questions,
  questionDetail,
  produtos,
  produtoDetail
})

export default rootReducer
