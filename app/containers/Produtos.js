import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProdutos } from 'actions/produtos'
import { Link } from 'react-router'
import _ from 'lodash'
import Produtos from 'components/Produtos'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class ProdutosContainer extends Component {
  static fetchData({ store }) {
    return store.dispatch(loadProdutos())
  }

  componentDidMount() {
    this.props.loadProdutos()
  }
  render() {
    return (
      <div>
        <Helmet
          title="Produtos"
        />
        <h2>Prodytos</h2>
        <Produtos produtos={this.props.produtos} />
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { produtos: state.produtos }
}

export { ProdutosContainer }
export default connect(mapStateToProps, { loadProdutos })(ProdutosContainer)
