import React, { memo, useEffect, useState } from 'react'
import './index.less'
import { Button, Input, Pagination, Tree } from 'antd'
import { getKnowledgeExercises } from '@/services/knowledge'
import { connect } from 'react-redux'
import { GET_HOME_INFO } from '@/store/actionType'
import { setTimerType } from '@/utils'

function Knowledge(props) {
  const { homeInfo, history } = props
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
  const [selectedKeys, setSelectedKeys] = useState([])
  const [autoExpandParent, setAutoExpandParent] = useState(true)

  useEffect(() => {
    getKnowledge(16)
    return () => {}
  }, [])

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
    page = 1
  ) => {
    const { code, data, msg } = await getKnowledgeExercises({
      grade_id,
      konwledge_id,
      type,
      level,
      page,
    })
    if (code === 200) {
      setKnowledge(data)
      setgradeId(data?.grade_id)
    }
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
    getKnowledge(gradeId, checkedKeys, questionCategoryscrure, level, topageValue)
    setListpage(topageValue * 1)
  }

  /**
   *
   *  点击试题详情
   * @param {*} id
   */
  const answerClick = (id) => {
    history.push(`/main/questiondetails?id=${id}`)
  }

  const onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys)
    setExpandedKeys(expandedKeys)
    setAutoExpandParent(false)
  }

  const onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys)
    setCheckedKeys(checkedKeys)
    getKnowledge(gradeId, checkedKeys, questionCategoryscrure, level, topageValue)
  }

  const onSelect = (selectedKeys, info) => {
    console.log('onSelect', info)
    setSelectedKeys(selectedKeys)
  }

  return (
    <div id="Knowledge">
      <div className="left_box">
        <div className="title">
          {Knowledge?.grades?.map((item) => {
            if (item?.id == Knowledge?.grade_id) {
              return item?.name
            }
          })}
          {homeInfo?.teacher?.get_subject?.title} · 知识点
        </div>
        <Tree
          checkable
          showLine
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          treeData={knowledgeArrNewView(Knowledge?.knowledge)}
        />
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
              <div className="timer">
                <span>时间</span>
                <img
                  className="down"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down.png"
                  alt="down"
                />
              </div>
              <div className="count">
                <span>使用次数</span>
                <img
                  className="down"
                  src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down.png"
                  alt="down"
                />
              </div>
            </div>
            <div className="right_boxs">
              <div className="total">
                共计：{Knowledge?.exercisesLists?.total}题
              </div>
              <div className="allin">选择本页全部试题</div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="content">
          {/* items */}
          {/* Knowledge?.exercisesLists?.data */}
          {Knowledge?.exercisesLists?.data?.map((item) => {
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
                <div className="bot_btns">
                  <div className="left_box_warp">
                    <div className="update_time">
                      更新时间：{setTimerType(item?.update_time * 1000)}
                    </div>
                    {/* <div className="counts">组卷次数：0</div> */}
                  </div>
                  <div className="right_box_warp">
                    <div className="answers">
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
                    <Button className="add" variant="contained">
                      <span>+</span>
                      组卷
                    </Button>
                    {/* <Button className="sub" variant="contained">
                  <em>-</em>
                  移除
                </Button> */}
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
      {/* 悬浮篮 */}
      <div className="fled_basket">
        <img
          className="basket_icon"
          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png"
          alt="basket_icon"
        />
        <span className="count">
          <em>0</em>/40
        </span>
        <span className="title">进入组卷</span>
        <img
          className="arrow_icon"
          src="https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon.png"
          alt="arrow_icon"
        />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Knowledge))
