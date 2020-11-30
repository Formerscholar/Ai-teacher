import {
  GET_HOME_INFO,
  GET_CLASS_INFO,
  ADD_TOPIC,
  SUB_TOPIC
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

export const Addtopicslist = (value) => {
  return {
    type: ADD_TOPIC,
    value,
  }
}

export const Subtopicslist = (value) => {
  return {
    type: SUB_TOPIC,
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
