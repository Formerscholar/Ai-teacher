import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { Button, Pagination, Tree, message, Breadcrumb, Input } from 'antd'
import {
  getKnowledgeExercises,
  addExamBasket,
  delExamBasket,
  getExerciseAnswer
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

function Knowledge(props) {
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

  useEffect(() => {
    getKnowledge(gradeId, checkedKeys, questionCategoryscrure, level, Listpage)
    return () => {}
  }, [volumeTopicCount])

  const searchClick = () => {
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      Listpage,
      searchData
    )
  }

  /**
   *  请求知识点数据
   * @param {string} [grade_id='']
   * @param {string} [konwledge_id='']
   * @param {string} [type='']
   * @param {string} [level='']
   */
  const getKnowledge = async (
    grade_id,
    konwledge_id = 0,
    type = 0,
    level = 0,
    page = 1,
    title = ''
  ) => {
    const { code, data, msg } = await getKnowledgeExercises({
      grade_id,
      konwledge_id,
      type,
      level,
      page,
      title,
    })
    if (code === 200) {
      data?.exercisesLists?.data?.map((item) => {
        item['isanswer'] = false
      })
      let arr = data?.knowledge?.map((item) => item?.id.toString())
      console.log(arr)
      setExpandedKeys(arr)
      setKnowledge(data)
      setgradeId(data?.grade_id)
    }
  }

  const onSetAnswer =async (idx, id) => {
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
        key: item?.id.toString(),
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
    getKnowledge(id, checkedKeys, questionCategoryscrure, level, Listpage)
  }

  /**
   *  难度选择事件
   * @param {*} index 选中下标
   */
  const levelClick = (index) => {
    setlevelscrure(index)
    setlevel(index)
    getKnowledge(gradeId, checkedKeys, questionCategoryscrure, index, Listpage)
  }
  /**
   *  题类选择事件
   * @param {*} id  题类id
   * @param {*} index 选中下标
   */
  const questionCategoryClick = (id, index) => {
    setquestionCategoryscrure(id)
    setquestionCategory(index)
    getKnowledge(gradeId, checkedKeys, id, level, Listpage)
  }

  /**
   *
   *  页面变化请求数据
   * @param {Object} event
   * @param {Number} page
   */
  const PaginationChange = (page, pageSize) => {
    setListpage(page * 1)
    getKnowledge(gradeId, checkedKeys, questionCategoryscrure, level, page)
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
      topageValue
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
    //setAutoExpandParent(false)
  }

  const onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys)
    setCheckedKeys(checkedKeys)
    getKnowledge(
      gradeId,
      checkedKeys,
      questionCategoryscrure,
      level,
      topageValue
    )
  }

  const onSelect = (selectedKeys, info) => {
	  console.log(selectedKeys, info);
	  var children = selectedrecursion(info.node.children);
	  if(typeof(children) == 'undefined') children = []
	  children.push(info.node.key);
	  console.log('children', children);
	  var arr = [];
	  if(info.node.checked){
		  var arr_ = checkedKeys;
		  children.map(function(item, index){
			  checkedKeys.map(function(item1, index1){
				  if(item1 == item){
					  arr_.splice(index1, 1);
				  }
			  });
		  })
		  arr = arr_
	  }else{
		  arr = [...children, ...checkedKeys];
	  }
	  console.log('arr', arr);
    setCheckedKeys(arr)
    getKnowledge(gradeId, arr, questionCategoryscrure, level, topageValue)
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
  return (
    <div id="Knowledge">
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
          知识库
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="Knowledge_box">
        <div className="left_box">
          <div className="title">
            {Knowledge?.grades?.map((item) => {
              if (item?.id == Knowledge?.grade_id) {
                return item?.name
              }
            })}
            {homeInfo?.teacher?.get_subject?.title} · 知识点
          </div>
          {Knowledge.knowledge&&Knowledge.knowledge.length>0 ? <Tree checkable showLine onExpand={onExpand} defaultExpandedKeys={expandedKeys} onCheck={onCheck} checkedKeys={checkedKeys} onSelect={onSelect} treeData={knowledgeArrNewView(Knowledge?.knowledge)} /> : ''}
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
                {/* <div className="total">
                  共计：{Knowledge?.exercisesLists?.total}题
                </div> */}
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
                <div className="items" key={item?.id}>
                  <div className="top_title">
                    <div className="info_class">
                      <div className="difficulty">
                        难度：<span>{Knowledge?.level[item?.level]}</span>
                      </div>
                      <div className="question">
                        {/* 来源：邗江实验学校2019-2020年九年级上学期第一次月考试卷.doc */}
                        题型：{item?.get_question_category?.title}
                      </div>
                    </div>
                    {/* <img
                    className="new_icon"
                    src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/new_icon.png"
                    alt="new_icon"
                  /> */}
                  </div>
                  <div
                    className="cet_body"
                    dangerouslySetInnerHTML={{ __html: item?.content_all }}
                  ></div>
                  <div
                    className="answerbox"
                    style={{ display: item?.isanswer ? 'block' : 'none' }}
                  >
                    <div className="Tests">
                      <span className="title">【考点】</span>
                      <div
                        className="body_txt"
                        dangerouslySetInnerHTML={{
                          __html: item?.knowName,
                        }}
                      ></div>
                    </div>
                    <div className="answer">
                      <span className="title">【答案】</span>
                      <div
                        className="body_txt"
                        dangerouslySetInnerHTML={{
                          __html: item?.answer,
                        }}
                      ></div>
                    </div>
                    <div className="Parse">
                      <span className="title">【解析】</span>
                      <div
                        className="body_txt"
                        dangerouslySetInnerHTML={{
                          __html: item?.analysis,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="bot_btns">
                    <div className="left_box_warp">
                      <div className="update_time">
                        更新时间：{setTimerType(item?.update_time * 1000)}
                      </div>
                      {/* <div className="counts">组卷次数：0</div> */}
                    </div>
                    <div className="right_box_warp">
                      <div className="answers" onClick={() => onSetAnswer(idx,item?.id)}>
                        <img
                          className="View"
                          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png"
                          alt="View"
                        />
                        <span>查看答案</span>
                      </div>
                      <div
                        className="details"
                        onClick={() => answerClick(item?.id)}
                      >
                        <img
                          className="answer"
                          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png"
                          alt="answer"
                        />
                        <span>试题详情</span>
                      </div>
                      {item?.is_basket ? (
                        <Button
                          className="sub"
                          size="small"
                          variant="contained"
                          onClick={() => removeClick(item?.id)}
                        >
                          - 移除
                        </Button>
                      ) : (
                        <Button
                          className="add"
                          size="small"
                          variant="contained"
                          onClick={() => compositionClick(item?.id, item?.type)}
                        >
                          + 组卷
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Knowledge))
