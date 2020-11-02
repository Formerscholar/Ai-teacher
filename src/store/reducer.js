import defaultState from './defaultState'
import { GET_LIST } from './actionType'

const reducer = (state = defaultState, action) => {
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.listItem = action.value
    return newState
  }

  return state
}

export default reducer
