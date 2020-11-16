import defaultState from './defaultState'
import { GET_HOME_INFO ,GET_CLASS_INFO } from './actionType'

const reducer = (state = defaultState, action) => {
  if (action.type === GET_HOME_INFO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.homeInfo = action.value
    return newState
  }
  if (action.type === GET_CLASS_INFO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.classInfo = action.value
    return newState
  }

  return state
}

export default reducer
