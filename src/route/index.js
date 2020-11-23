import React, { memo } from 'react'
import { Route, Redirect } from 'react-router-dom'
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

const Uploadpaper = Loadable({
  loader: () => import('@/pages/uploadpaper'),
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

const Paperlist = Loadable({
  loader: () => import('@/pages/paperlist'),
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

const BasicRoute = (props) => (
  <>
    <AI_header props={props} />
    <Route path="/main/index" component={Main} />
    <Route path="/main/user" component={User} />
    <Route path="/main/class" component={Class} />
    <Route path="/main/famous" component={Famous} />
    <Route path="/main/schoolbased" component={Schoolbased} />
    <Route path="/main/knowledge" component={Knowledge} />
    <Route path="/main/uploadpaper" component={Uploadpaper} />
    <Route path="/main/paperlist" component={Paperlist} />
    <Route path="/main/mypaper" component={Mypaper} />
    <Route path="/main/classdetail" component={classDetails} />
    <Route path="/main/chapter" component={Chapter} />
    <Route path="/main/questiondetails" component={Questiondetails} />
    <Route path="/main/schoolbaseddetail" component={Schoolbaseddetail} />
    <Route path="/main/studyreport" component={StudyReport} />
    <AI_footer />
  </>
)

export default memo(BasicRoute)
