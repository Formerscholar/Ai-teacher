import { GetListAction, GetClassAction } from '@/store/actionCreators'

const mapStateToProps = (state) => {
  const { homeInfo, classInfo } = state
  return {
    homeInfo,
    classInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetListData(value) {
      const action = GetListAction(value)
      dispatch(action)
    },
    GetClassData(value) {
      const action = GetClassAction(value)
      dispatch(action)
    },
  }
}

export { mapStateToProps, mapDispatchToProps }
