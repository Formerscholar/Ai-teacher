import {
  GetListAction,
  GetClassAction,
  Addtopicslist,
  Subtopicslist
} from '@/store/actionCreators'

const mapStateToProps = (state) => {
  const { homeInfo, classInfo, volumeTopicslist } = state
  return {
    homeInfo,
    classInfo,
    volumeTopicslist,
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
    addtopicsData(value) {
      const action = Addtopicslist(value)
      dispatch(action)
    },
    subtopicsData(value) {
      const action = Subtopicslist(value)
      dispatch(action)
    },
  }
}

export { mapStateToProps, mapDispatchToProps }
