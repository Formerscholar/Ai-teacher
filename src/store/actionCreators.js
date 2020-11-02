import { GET_LIST } from './actionType'

export const GetListAction = (value) => {
  return {
    type: GET_LIST,
    value,
  }
}

// --------------------------------------------

export const GetList = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      const action = GetListAction(data)
      dispatch(action)
    }, 2000)
  }
}

// export const DeleteList = (data) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       const action = DeleteAction(data)
//       dispatch(action)
//     }, 2000)
//   }
// }
