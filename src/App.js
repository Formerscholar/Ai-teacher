import React, { memo } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import G_spin from '@/common/G_spin'
import Loadable from 'react-loadable'

const Login = Loadable({
  loader: () => import('@/pages/login'),
  loading: G_spin,
})

const BasicRoute = Loadable({
  loader: () => import('@/route'),
  loading: G_spin,
})

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/main" component={BasicRoute} />
          <Route path="/login" component={Login} />
          <Redirect to="/main/index"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default memo(App)
