import defaultState from './defaultState'
import {
  GET_HOME_INFO,
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
} from './actionType'

const reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_HOME_INFO:
      newState.homeInfo = action.value
      return newState
    case GET_CLASS_INFO:
      newState.classInfo = action.value
      return newState
    case ADD_TOPIC:
      if (newState.volumeTopicslist.length <= 40) {
        const isexist = newState.volumeTopicslist.findIndex(
          (item) => item.id == action.value.id
        )
        if (isexist == -1) {
          newState.volumeTopicslist.push(action.value)
        }
        return newState
      }
    case SUB_TOPIC:
      if (newState.volumeTopicslist.length > 0) {
        const index = newState.volumeTopicslist.findIndex(
          (item) => item.id == action.value
        )
        if (index != -1) {
          newState.volumeTopicslist.splice(index, 1)
        }
      }
      return newState
    default:
      break
  }
  return state
}

export default reducer
