import { combineReducers } from 'redux'
import questions from 'reducers/questions'
import questionDetail from 'reducers/questionDetail'
import produtos from 'reducers/produtos'

const rootReducer = combineReducers({
  questions,
  questionDetail,
  produtos
})

export default rootReducer
