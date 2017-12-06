import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_PRODUTOS = Symbol('LOADED_PRODUTOS')
export function loadProdutos() {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/sites/MLA/search?q=You need a react javascript master',
      successType: LOADED_PRODUTOS
    }
  }
}

export const SEARCHED_PRODUTOS = Symbol('SEARCHED_PRODUTOS')
export function searchProdutos(inputValue) {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/sites/MLA/search?q=' + inputValue,
      successType: SEARCHED_PRODUTOS
    }
  }
}


export const LOADED_PRODUCT_DETAIL = Symbol('LOADED_PRODUCT_DETAIL')
export function loadProductDetail (id) {
  return {
    [CALL_API]: {
      method: 'get',
      path: `/items/${id}`,
      successType: LOADED_PRODUCT_DETAIL
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
