import {
  GetListAction,
  GetClassAction,
  AddtopicCount,
  SubtopicCount,
  SettopicCount,
} from '@/store/actionCreators'

const mapStateToProps = (state) => {
  const { homeInfo, classInfo, volumeTopicCount } = state
  return {
    homeInfo,
    classInfo,
    volumeTopicCount,
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
    addtopicCount(value) {
      const action = AddtopicCount(value)
      dispatch(action)
    },
    subtopicCount(value) {
      const action = SubtopicCount(value)
      dispatch(action)
    },
    settopicCount(value) {
      const action = SettopicCount(value)
      dispatch(action)
    },
  }
}

export { mapStateToProps, mapDispatchToProps }
