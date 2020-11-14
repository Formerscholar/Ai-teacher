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

const BasicRoute = (props) => (
  <>
    <AI_header props={props} />
    <Route path="/main/index" component={Main} />
    <Route path="/main/class" component={Class} />
    <Route path="/main/famous" component={Main} />
    <Route path="/main/schoolbased" component={Main} />
    <Route path="/main/knowledge" component={Main} />
    <Route path="/main/uploadpaper" component={Main} />
    <Route path="/main/mypaper" component={Main} />
    <Redirect to="/main/index"></Redirect>
    <AI_footer />
  </>
)

export default memo(BasicRoute)
