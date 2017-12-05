import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          defaultTitle="Mercado Livre APP"
          titleTemplate="%s - React Universal"
          meta={[
            {"name": "description", "content": "Uma aplicação contendo React Universal e Redux para o Meli, all the best."},
          ]}
          htmlAttributes={{"lang": "en"}}
        />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
