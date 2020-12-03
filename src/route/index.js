import React, { memo } from 'react'
import { Route } from 'react-router-dom'
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

const Schoolbased = Loadable({
  loader: () => import('@/pages/schoolbased'),
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

const BasicRoute = (props) => {
  window.scrollTo(0,0);
  const { location } = props
  switch (location.pathname) {
    case '/main/index':
      localStorage.setItem('menuIndex', 0)
      break
    case '/main/user':
      localStorage.setItem('menuIndex', 0)
      break
    case '/main/class':
      localStorage.setItem('menuIndex', 1)
      break
    case '/main/famous':
      localStorage.setItem('menuIndex', 3)
      break
    case '/main/schoolbased':
      localStorage.setItem('menuIndex', 4)
      break
    case '/main/knowledge':
      localStorage.setItem('menuIndex', 5)
      break
    case '/main/mypaper':
      localStorage.setItem('menuIndex', 6)
      break
    case '/main/classdetail':
      localStorage.setItem('menuIndex', 1)
      break
    case '/main/chapter':
      localStorage.setItem('menuIndex', 5)
      break
    case '/main/questiondetails':
      localStorage.setItem('menuIndex', 5)
      break
    case '/main/schoolbaseddetail':
      localStorage.setItem('menuIndex', 4)
      break
    case '/main/studyreport':
      localStorage.setItem('menuIndex', 1)
      break
    case '/main/classreport':
      localStorage.setItem('menuIndex', 2)
      break
    case '/main/mypaperlist':
      localStorage.setItem('menuIndex', 6)
      break
    default:
      break
  }
  return (
    <>
      <AI_header props={props} />
      <Route path="/main/index" component={Main} />
      <Route path="/main/user" component={User} />
      <Route path="/main/class" component={Class} />
      <Route path="/main/famous" component={Famous} />
      <Route path="/main/schoolbased" component={Schoolbased} />
      <Route path="/main/knowledge" component={Knowledge} />
      <Route path="/main/mypaper" component={Mypaper} />
      <Route path="/main/classdetail" component={classDetails} />
      <Route path="/main/chapter" component={Chapter} />
      <Route path="/main/questiondetails" component={Questiondetails} />
      <Route path="/main/schoolbaseddetail" component={Schoolbaseddetail} />
      <Route path="/main/studyreport" component={StudyReport} />
      <Route path="/main/classreport" component={ClassReport} />
      <Route path="/main/mypaperlist" component={Mypaperlist} />
      <AI_footer />
    </>
  )
}

export default memo(BasicRoute)
