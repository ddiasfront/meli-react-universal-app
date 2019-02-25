import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProdutos, searchProdutos } from 'actions/produtos'
import Produtos from 'components/Produtos'
import Helmet from 'react-helmet'

class ProdutosContainer extends Component {
  
  static fetchData({ store }) {
      return store.dispatch(loadProdutos())
  }

  componentWillReceiveProps(nextprops) {
    if ( this.props.params.id !== undefined && nextprops.params.id !== this.props.params.id  ) {
      this.props.searchProdutos(nextprops.params.id)
    }
    if ( this.props.params.id == undefined && nextprops.params.id !== undefined ) {
      this.props.searchProdutos(nextprops.params.id)
    }
  }
  
  componentDidMount() {
      if ( this.props.params.id ) {
        this.props.searchProdutos( this.props.params.id)
      }
      else {
      this.props.loadProdutos()
      }
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
       
        <Produtos produtos={this.props.produtos}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { produtos: state.produtos }
}

export { ProdutosContainer }
export default connect(mapStateToProps, {loadProdutos, searchProdutos})(ProdutosContainer)
