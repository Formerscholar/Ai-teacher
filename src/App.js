import React, { memo } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import G_spin from '@/common/G_spin'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import store from '@/store'

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
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/main" component={BasicRoute} />
            <Route path="/login" component={Login} />
            <Redirect to="/main"></Redirect>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default memo(App)
