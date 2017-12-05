import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_PRODUTOS = Symbol('LOADED_PRODUTOS')
export function loadProdutos() {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/sites/MLA/search?q=123',
      successType: LOADED_PRODUTOS
    }
  }
}

export const LOADED_QUESTION_DETAIL = Symbol('LOADED_QUESTION_DETAIL')
export const LOADED_QUESTION_USER = Symbol('LOADED_QUESTION_USER')
export function loadQuestionDetail ({ id, history }) {
  return {
    [CHAIN_API]: [
      ()=> {
        return {
          [CALL_API]: {
            method: 'get',
            path: `/api/questions/${id}`,
            successType: LOADED_QUESTION_DETAIL,
            afterError: ()=> {
              history.push('/')
            }
          }
        }
      },
      (question) => {
        return {
          [CALL_API]: {
            method: 'get',
            path: `/api/users/${question.userId}`,
            successType: LOADED_QUESTION_USER
          }
        }
      }
    ]
  }
}
