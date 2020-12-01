import {
  GET_HOME_INFO,
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC
} from './actionType'

export const GetListAction = (value) => {
  return {
    type: GET_HOME_INFO,
    value,
  }
}

export const GetClassAction = (value) => {
  return {
    type: GET_CLASS_INFO,
    value,
  }
}

export const AddtopicCount = (value) => {
  return {
    type: ADD_TOPIC,
    value,
  }
}

export const SubtopicCount = (value) => {
  return {
    type: SUB_TOPIC,
    value,
  }
}

export const SettopicCount = (value) => {
  return {
    type: SET_TOPIC,
    value,
  }
}
// --------------------------------------------

// export const GetTopics = (data) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       const action = GetTopicslist(data)
//       dispatch(action)
//     }, 2000)
//   }
// }
