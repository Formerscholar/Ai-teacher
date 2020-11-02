import {GetList } from '@/store/actionCreators'

const mapStateToProps = (state) => {
  const { listItem } = state
  return {
    listItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetListData(value) {
      const action = GetList(value)
      dispatch(action)
    },
  }
}

export { mapStateToProps, mapDispatchToProps }
