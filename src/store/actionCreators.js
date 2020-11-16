import { GET_HOME_INFO ,GET_CLASS_INFO } from './actionType'

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


// --------------------------------------------

// export const GetList = (data) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       const action = GetListAction(data)
//       dispatch(action)
//     }, 2000)
//   }
// }

// export const DeleteList = (data) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       const action = DeleteAction(data)
//       dispatch(action)
//     }, 2000)
//   }
// }
