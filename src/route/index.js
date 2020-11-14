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

const BasicRoute = (props) => (
  <>
    <AI_header props={props} />
    <Route path="/main/index" component={Main} />
    <Route path="/main/class" component={Class} />
    <Route path="/main/famous" component={Famous} />
    <Route path="/main/schoolbased" component={Schoolbased} />
    <Route path="/main/knowledge" component={Knowledge} />
    <Route path="/main/uploadpaper" component={Uploadpaper} />
    <Route path="/main/mypaper" component={Mypaper} />
    <Redirect to="/main/index"></Redirect>
    <AI_footer />
  </>
)

export default memo(BasicRoute)
