import React, { memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AI_header from 'components/AI_header/AI_header'
import AI_footer from 'components/AI_footer/AI_footer'
import Loadable from 'react-loadable'
import G_spin from '@/common/G_spin'

const Main = Loadable({
  loader: () => import('@/pages/main'),
  loading: G_spin,
})

const Class = Loadable({
  loader: () => import('@/pages/class'),
  loading: G_spin,
})

const Famous = Loadable({
  loader: () => import('@/pages/famous'),
  loading: G_spin,
})

const FamouFolder = Loadable({
  loader: () => import('@/pages/famoufolder'),
  loading: G_spin,
})

const Schoolbased = Loadable({
  loader: () => import('@/pages/schoolbased'),
  loading: G_spin,
})

const basedfolder = Loadable({
  loader: () => import('@/pages/basedfolder'),
  loading: G_spin,
})

const Knowledge = Loadable({
  loader: () => import('@/pages/knowledge'),
  loading: G_spin,
})

const Mypaper = Loadable({
  loader: () => import('@/pages/mypaper'),
  loading: G_spin,
})

const classDetails = Loadable({
  loader: () => import('@/pages/classDetails'),
  loading: G_spin,
})

const Chapter = Loadable({
  loader: () => import('@/pages/chapter'),
  loading: G_spin,
})

const Questiondetails = Loadable({
  loader: () => import('@/pages/questiondetails'),
  loading: G_spin,
})

const Schoolbaseddetail = Loadable({
  loader: () => import('@/pages/schoolbaseddetail'),
  loading: G_spin,
})

const User = Loadable({
  loader: () => import('@/pages/user'),
  loading: G_spin,
})

const StudyReport = Loadable({
  loader: () => import('@/pages/StudyReport'),
  loading: G_spin,
})

const ClassReport = Loadable({
  loader: () => import('@/pages/ClassReport'),
  loading: G_spin,
})

const Mypaperlist = Loadable({
  loader: () => import('@/pages/mypaperlist'),
  loading: G_spin,
})

const Mypaperdetail = Loadable({
  loader: () => import('@/pages/mypaperdetail'),
  loading: G_spin,
})

const Resourcesdetail = Loadable({
  loader: () => import('@/pages/resourcesdetail'),
  loading: G_spin,
})

const BasicRoute = (props) => {
  window.scrollTo(0, 0)
  const { location } = props
  switch (location.pathname) {
    case '/':
      document.title = '教师端 - AI错题宝'
      localStorage.setItem('menuIndex', 0)
      break
    case '/user':
      document.title = '个人信息 - AI错题宝'
      localStorage.setItem('menuIndex', 0)
      break
    case '/class':
      document.title = '班级信息 - AI错题宝'
      localStorage.setItem('menuIndex', 1)
      break
    case '/famous':
      document.title = '名校资源 - AI错题宝'
      localStorage.setItem('menuIndex', 3)
      break
    case '/famou/folder':
      document.title = '名校资源 - AI错题宝'
      localStorage.setItem('menuIndex', 3)
      break
    case '/schoolbased':
      document.title = '校本试卷 - AI错题宝'
      localStorage.setItem('menuIndex', 4)
      break
    case '/based/folder':
      document.title = '校本试卷 - AI错题宝'
      localStorage.setItem('menuIndex', 4)
      break
    case '/knowledge':
      document.title = '知识库 - AI错题宝'
      localStorage.setItem('menuIndex', 5)
      break
    case '/mypaper':
      document.title = '我的组卷 - AI错题宝'
      localStorage.setItem('menuIndex', 6)
      break
    case '/mypaper/detail':
      document.title = '试卷详情 - AI错题宝'
      localStorage.setItem('menuIndex', 6)
      break
    case '/class/detail':
      document.title = '班级详情 - AI错题宝'
      localStorage.setItem('menuIndex', 1)
      break
    case '/chapter':
      document.title = '章节同步 - AI错题宝'
      localStorage.setItem('menuIndex', 5)
      break
    case '/question/details':
      document.title = '试题详情 - AI错题宝'
      localStorage.setItem('menuIndex', 5)
      break
    case '/schoolbased/detail':
      document.title = '试卷详情 - AI错题宝'
      localStorage.setItem('menuIndex', 4)
      break
    case '/class/detail/chars':
      document.title = '学生学情 - AI错题宝'
      localStorage.setItem('menuIndex', 1)
      break
    case '/classreport':
      document.title = '学情报告 - AI错题宝'
      localStorage.setItem('menuIndex', 2)
      break
    case '/mypaper/list':
      document.title = '我的试卷 - AI错题宝'
      localStorage.setItem('menuIndex', 6)
      break
    case '/famous/detail':
      document.title = '名校资源详情 - AI错题宝'
      localStorage.setItem('menuIndex', 3)
      break
    default:
      break
  }
  return (
    <>
      <AI_header props={props} />
      <Switch>
        <Route path="/class/detail" exact component={classDetails} />
        <Route path="/class/detail/chars" exact component={StudyReport} />
        <Route path="/schoolbased/detail" exact component={Schoolbaseddetail} />
        <Route path="/question/details" exact component={Questiondetails} />
        <Route path="/mypaper/list" exact component={Mypaperlist} />
        <Route path="/mypaper/detail" exact component={Mypaperdetail} />
        <Route path="/famous/detail" exact component={Resourcesdetail} />
        <Route path="/index" component={Main} />
        <Route path="/user" component={User} />
        <Route path="/class" component={Class} />
        <Route path="/famous" component={Famous} />
        <Route path="/famou/folder" component={FamouFolder} />
        <Route path="/schoolbased" component={Schoolbased} />
        <Route path="/based/folder" component={basedfolder} />
        <Route path="/knowledge" component={Knowledge} />
        <Route path="/mypaper" component={Mypaper} />
        <Route path="/chapter" component={Chapter} />
        <Route path="/classreport" component={ClassReport} />
        <Redirect to="/index"></Redirect>
      </Switch>
      <AI_footer />
    </>
  )
}

export default memo(BasicRoute)
