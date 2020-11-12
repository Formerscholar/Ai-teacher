import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


import Loadable from 'react-loadable'
import G_spin from '@/common/G_spin'

const Main = Loadable({
  loader: () => import('@/pages/main'),
  loading: G_spin,
})

const Login = Loadable({
  loader: () => import('@/pages/login'),
  loading: G_spin,
})

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />
      <Redirect to="/main"></Redirect>
    </Switch>
  </BrowserRouter>
)

export default BasicRoute
