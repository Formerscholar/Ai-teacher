import defaultState from './defaultState'
import {
  GET_HOME_INFO,
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC
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
      newState.volumeTopicCount += action.value
      return newState
    case SUB_TOPIC:
      newState.volumeTopicCount -= action.value
      return newState
    case SET_TOPIC:
      newState.volumeTopicCount = action.value
      return newState
    default:
      break
  }
  return state
}

export default reducer
