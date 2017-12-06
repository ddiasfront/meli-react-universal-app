import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from 'store/configureStore'

import App from 'containers/App'
import Produtos from 'containers/Produtos'
import DetalheProduto from 'containers/DetalheProduto'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="produtos/:id" component={DetalheProduto} />
        <Route path="produtos" component={Produtos} />
        <IndexRoute component={Produtos} />
      </Route>
    </Router>
  )
}
