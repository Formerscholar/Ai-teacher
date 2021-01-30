import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { Button, Pagination, Tree, message, Breadcrumb, Input } from 'antd'
import {
  getChapterExercises,
  addExamBasket,
  delExamBasket,
  getExerciseAnswer,
} from '@/services/knowledge'
import { connect } from 'react-redux'
import {
  GET_HOME_INFO,
  ADD_TOPIC,
  SUB_TOPIC,
  SET_TOPIC,
} from '@/store/actionType'
import { setTimerType } from '@/utils'
import AI_floatBox from 'components/AI_floatBox/AI_floatBox'
import MathJax from 'react-mathjax-preview'
import AI_topic from 'components/AI_topic/AI_topic'

function Chapter(props) {
  const {
    homeInfo,
    history,
    addtopicData,
    subtopicData,
    volumeTopicCount,
  } = props
  const [Knowledge, setKnowledge] = useState({})
  const [gradescrure, setgradescrure] = useState(0)
  const [levelscrure, setlevelscrure] = useState(0)
  const [questionCategoryscrure, setquestionCategoryscrure] = useState(0)
  const [gradeId, setgradeId] = useState(0)
  const [level, setlevel] = useState(0)
  const [questionCategory, setquestionCategory] = useState(0)
  const [Listpage, setListpage] = useState(1)
  const [topageValue, settopageValue] = useState('1')
  const [expandedKeys, setExpandedKeys] = useState([])
  const [checkedKeys, setCheckedKeys] = useState([])
  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const [searchData, setsearchData] = useState('')
  const [currentVer, setcurrentVer] = useState(0)
  const [currentsemest, setcurrentsemest] = useState(0)
  const [dataVer, setdataVer] = useState(null)
  const [datasemest, setdatasemest] = useState(null)
  useEffect(() => {
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      Listpage,
      searchData,
      datasemest,
      dataVer
    )
    return () => {}
  }, [volumeTopicCount])

  const searchClick = () => {
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      Listpage,
      searchData,
      datasemest,
      dataVer
    )
  }

  const VerClick = (idx, id) => {
    setcurrentVer(idx)
    setdataVer(id)
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      Listpage,
      searchData,
      datasemest,
      id
    )
  }

  const semesterClick = (idx) => {
    setcurrentsemest(idx)
    setdatasemest(idx + 1)
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      Listpage,
      searchData,
      idx + 1,
      dataVer
    )
  }
  /**
   *  请求知识点数据
   */
  const getKnowledge = async (
    grade_id,
    konwledge_id = 0,
    type = 0,
    level = 0,
    page = 1,
    title = '',
    semester = ''
  ) => {
    const { code, data, msg } = await getChapterExercises({
      grade_id,
      chapter_id: konwledge_id,
      type,
      level,
      page,
      title,
      semester,
    })
    if (code === 200) {
      data?.exercisesLists?.data?.map((item) => {
        item['isanswer'] = false
      })
      let arr = data?.chapter?.map((item) => item?.id.toString())
      setExpandedKeys(arr)
      setKnowledge(data)
      setgradeId(data?.grade_id)
    }
  }

  const onSetAnswer = async (idx, id) => {
    let basedDataCopy = { ...Knowledge }
    let basedRoot = basedDataCopy.exercisesLists.data[idx]
    if (!basedRoot.isanswer) {
      if (
        basedRoot['knowName'] === undefined &&
        basedRoot['answer'] === undefined &&
        basedRoot['analysis'] === undefined
      ) {
        const { code, data, msg } = await getExerciseAnswer({
          id,
        })
        if (code === 200) {
          basedRoot['knowName'] = data.exercise.knowName
          basedRoot['answer'] = data.exercise.answer
          basedRoot['analysis'] = data.exercise.analysis
        } else {
          message.error(msg)
        }
      }
    }
    basedRoot.isanswer = !basedRoot.isanswer
    setKnowledge(basedDataCopy)
  }

  /**
   *  递归函数 生成 知识点树Data
   * @param {*} [array=[]]
   */
  function knowledgeArrNewView(array = []) {
    return array?.map((item) => {
      return {
        title: item?.name,
        key: item?.id,
        children: item?.children && knowledgeArrNewView(item?.children),
      }
    })
  }

  /**
   *  年级选择事件
   * @param {*} id 年级ID
   * @param {*} index 选中下标
   */
  const gradeClick = (id, index) => {
    setgradescrure(index)
    setgradeId(id)
    getKnowledge(
      id,
      checkedKeys,
      questionCategoryscrure,
      level,
      Listpage,
      searchData,
      datasemest,
      dataVer
    )
  }

  /**
   *  难度选择事件
   * @param {*} index 选中下标
   */
  const levelClick = (index) => {
    setlevelscrure(index)
    setlevel(index)
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      index,
      Listpage,
      searchData,
      datasemest,
      dataVer
    )
  }
  /**
   *  题类选择事件
   * @param {*} id  题类id
   * @param {*} index 选中下标
   */
  const questionCategoryClick = (id, index) => {
    setquestionCategoryscrure(id)
    setquestionCategory(index)
    getKnowledge(
      gradeId,
      checkedKeys,
      id,
      level,
      Listpage,
      searchData,
      datasemest,
      dataVer
    )
  }

  /**
   *
   *  页面变化请求数据
   * @param {Object} event
   * @param {Number} page
   */
  const PaginationChange = (page, pageSize) => {
    setListpage(page * 1)
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      page,
      searchData,
      datasemest,
      dataVer
    )
  }

  /**
   * 跳转页面输入框事件
   * @param {*} e
   */
  const TextFieldChange = (e) => {
    const { value } = e.target
    settopageValue(value)
  }

  /**
   *
   * 确定跳转点击
   */
  const TopageClick = () => {
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      topageValue,
      searchData,
      datasemest,
      dataVer
    )
    setListpage(topageValue * 1)
  }

  /**
   *
   *  点击试题详情
   * @param {*} id
   */
  const answerClick = (id) => {
    window.open(`/question/details?id=${id}`)
  }

  const onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys)
    setExpandedKeys(expandedKeys)
    // setAutoExpandParent(false)
  }

  const onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys)
    setCheckedKeys(checkedKeys)
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      topageValue,
      searchData,
      datasemest,
      dataVer
    )
  }

  const onSelect = (selectedKeys, info) => {
    // let arr = [...selectedKeys, ...checkedKeys]
    // if (info?.node?.children) {
    //   arr = [...arr, ...selectedrecursion(info?.node?.children)]
    // }
    var children = selectedrecursion(info.node.children)
    if (typeof children == 'undefined') children = []
    children.push(info.node.key)
    var arr = []
    if (info.node.checked) {
      var arr_ = checkedKeys
      children.map(function (item, index) {
        checkedKeys.map(function (item1, index1) {
          if (item1 == item) {
            arr_.splice(index1, 1)
          }
        })
      })
      arr = arr_
    } else {
      arr = [...children, ...checkedKeys]
    }
    setCheckedKeys(arr)
    getKnowledge(
      gradeId,
      arr,
      questionCategoryscrure,
      level,
      topageValue,
      searchData,
      datasemest,
      dataVer
    )
  }
  const selectedrecursion = (children) => {
    return (
      children &&
      children.map((item) => {
        item?.children && selectedrecursion(item?.children)
        return item.key
      })
    )
  }
  /**
   *  组卷添加事件
   *
   * @param {*} id
   * @param {*} type
   */
  const compositionClick = async (id, type) => {
    const { code, msg } = await addExamBasket({
      exercises_id: [id],
    })
    if (code == 200) {
      message.success(msg)
      addtopicData(1)
    } else {
      message.error(msg)
    }
  }

  const removeClick = async (id) => {
    const { code, msg } = await delExamBasket({
      exercises_id: id,
    })
    if (code == 200) {
      message.success(msg)
      subtopicData(1)
    } else {
      message.error(msg)
    }
  }

  const selectAllClick = async () => {
    const Ids = Knowledge?.exercisesLists?.data?.map((item) => item.id)
    const { code, msg } = await addExamBasket({
      exercises_id: Ids,
    })
    if (code == 200) {
      message.success(msg)
      addtopicData(Knowledge?.exercisesLists?.data?.length)
    } else {
      message.error(msg)
    }
  }
  /**
   *
   *  返回路由
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault()
    history.push('/index')
  }

  const semesterView = (obj) => {
    return Object.values(obj).map((item, index) => {
      return (
        <div
          className={currentsemest == index ? 'items selected' : 'items'}
          key={index}
          onClick={() => semesterClick(index)}
        >
          <span>{item}</span>
        </div>
      )
    })
  }

  const semesterTitle = (obj) => {
    return Object.values(obj).map((item, index) => {
      if (index + 1 == Knowledge?.semesterId) {
        return item
      }
    })
  }

  return (
    <div id="Chapter">
      <Breadcrumb
        separator={
          <img
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png"
            style={{ width: '0.57rem', height: '0.79rem' }}
          />
        }
      >
        <Breadcrumb.Item
          style={{ cursor: 'pointer', color: '#222' }}
          onClick={handleClick}
        >
          <img
            className="position"
            src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png"
            style={{ width: '0.86rem', height: '1.14rem', marginRight: '1rem' }}
            alt="position"
          />
          首页
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ cursor: 'pointer', color: '#222' }}>
          章节选题
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="Knowledge_box">
        <div className="left_box">
          <div className="title">
            {Knowledge?.version?.get_version.title} ·{' '}
            {Knowledge?.semester && semesterTitle(Knowledge?.semester)}
          </div>
          {Knowledge.chapter && Knowledge.chapter.length > 0 ? (
            <Tree
              checkable
              showLine
              onExpand={onExpand}
              defaultExpandedKeys={expandedKeys}
              onCheck={onCheck}
              checkedKeys={checkedKeys}
              onSelect={onSelect}
              treeData={knowledgeArrNewView(Knowledge?.chapter)}
            />
          ) : (
            ''
          )}
          <div className="hover_select">
            {/* 学期 */}
            <div className="semester">
              <div className="title_box">学期:</div>
              <div className="list">
                {Knowledge?.semester && semesterView(Knowledge?.semester)}
              </div>
            </div>
          </div>
        </div>
        <div className="right_box">
          <div className="top_box">
            <div className="select_box">
              <div className="grade grop_warp">
                <span className="title">年级：</span>
                <div className="select_items">
                  {Knowledge?.grades?.map((item, index) => {
                    return (
                      <div
                        className={
                          index === gradescrure
                            ? 'select_item Selected'
                            : 'select_item'
                        }
                        key={item?.id}
                        onClick={() => gradeClick(item?.id, index)}
                      >
                        {item?.name}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="Difficulty grop_warp">
                <span className="title">难度：</span>
                <div className="select_items">
                  {Knowledge?.level?.map((item, index) => {
                    return (
                      <div
                        className={
                          index === levelscrure
                            ? 'select_item Selected'
                            : 'select_item'
                        }
                        key={index}
                        onClick={() => levelClick(index)}
                      >
                        {item}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="Questions grop_warp">
                <span className="title">题类：</span>
                <div className="select_items">
                  {Knowledge?.questionCategory?.map((item, index) => {
                    return (
                      <div
                        className={
                          index === questionCategory
                            ? 'select_item Selected'
                            : 'select_item'
                        }
                        key={item?.id}
                        onClick={() => questionCategoryClick(item?.id, index)}
                      >
                        {item?.title}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="tip_box">
              <div className="left_boxs">
                {/* <div className="total">
                  共计：{Knowledge?.exercisesLists?.total}题
                </div> */}
                <Input
                  className="searchData"
                  value={searchData}
                  placeholder="搜索题目"
                  onChange={(e) => setsearchData(e.target.value)}
                />
                <Button
                  type="primary"
                  size="small"
                  className="searchclick"
                  onClick={searchClick}
                >
                  搜索
                </Button>
              </div>
              <div className="right_boxs">
                <div className="allin" onClick={selectAllClick}>
                  选择本页全部试题
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="content">
            {/* items */}
            {/* Knowledge?.exercisesLists?.data */}
            {Knowledge?.exercisesLists?.data?.map((item, idx) => {
              return (
                <AI_topic
                  key={item?.id}
                  level={item?.level}
                  exercises_title={item?.get_question_category?.title}
                  content_all={item?.content_all}
                  isanswer={item?.isanswer}
                  knowName={item?.knowName}
                  answer={item?.answer}
                  analysis={item?.analysis}
                  update_time={item?.update_time}
                  is_basket={item?.is_basket}
                  onSetAnswer={() => onSetAnswer(idx, item?.id)}
                  answerClick={() => answerClick(item?.id)}
                  removeClick={() => removeClick(item?.id)}
                  compositionClick={() =>
                    compositionClick(item?.id, item?.type)
                  }
                />
              )
            })}

            {/* items */}
          </div>
          {/* page */}
          <div className="pages">
            <Pagination
              hideOnSinglePage={false}
              total={Knowledge?.exercisesLists?.total}
              defaultPageSize={20}
              showSizeChanger={false}
              showQuickJumper={true}
              pageSize={Knowledge?.exercisesLists?.per_page || 20}
              onChange={PaginationChange}
              current={Listpage}
            />
            {/* <div className="showtotal">
            共{Knowledge?.exercisesLists?.last_page}页
          </div>
          <Input
            className="outlined"
            id="outlined-basic"
            variant="outlined"
            value={topageValue}
            onChange={TextFieldChange}
          />
          <Button variant="contained" className="btns" onClick={TopageClick}>
            跳转
          </Button> */}
          </div>
        </div>
        {/* 悬浮框 */}
        <AI_floatBox props={props} />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
    volumeTopicCount: state.volumeTopicCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData(value) {
      let action = {
        type: GET_HOME_INFO,
        value: value,
      }
      dispatch(action)
    },
    /**
     * @param {*} value 
        {
          id: 120,
          type: 14,
        }
     */
    addtopicData(value) {
      let action = {
        type: ADD_TOPIC,
        value: value,
      }
      dispatch(action)
    },
    subtopicData(value) {
      let action = {
        type: SUB_TOPIC,
        value: value,
      }
      dispatch(action)
    },
    settopicData(value) {
      let action = {
        type: SET_TOPIC,
        value: value,
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Chapter))
