import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProdutos, searchProdutos } from 'actions/produtos'
import { Link } from 'react-router'
import _ from 'lodash'
import Produtos from 'components/Produtos'
import SearchInput from 'components/SearchInput'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { SearchBar, Container } from '../styled'

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
          meta={[
            {"name": "description", "content": "Uma aplicação contendo React Universal e Redux para o Meli, all the best."},
          ]}
        />
        <SearchBar>
           <Container> 
            <SearchInput search={this.props.searchProdutos}/>
          </Container>
        </SearchBar>
        <Produtos produtos={this.props.produtos}/>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { produtos: state.produtos }
}

export { ProdutosContainer }
export default connect(mapStateToProps, {loadProdutos, searchProdutos})(ProdutosContainer)
