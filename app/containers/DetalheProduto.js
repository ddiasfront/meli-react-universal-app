import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProductDetail, searchProdutos } from 'actions/produtos'
import Helmet from 'react-helmet'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { toJS } from 'immutable'
import { SearchBar, Container } from '../styled'
import SearchInput from 'components/SearchInput'

class DetalheProduto extends Component {

  componentDidMount() {
    let id = this.props.params.id
    this.props.loadProductDetail(id)
  }
  render() {

    const loadImg = () => {
      if (spec.pictures) {
        return spec.pictures[0].url
      }
      else {
        return spec.thumbnail
      }
    }

    const renderDesc = () => {
      if (desc && desc.plainText) {
        return desc.plainText
      }
    }

    let detalhes = this.props.detalheproduto.toJS();

    let spec = detalhes.productDetail
    let desc = detalhes.productDesct

    return (
      <div>
        <Helmet
          title={'Produto detalhe ' + this.props.params.id}
        />
        <SearchBar>
           <Container> 
            <SearchInput search={this.props.searchProdutos} params={this.props.params.id}/>
          </Container>
        </SearchBar>

        <span>{spec.soldQuantity}</span>
        {spec.condition}
        {spec.price}
        {spec.title}
        {renderDesc()}
        <img src={loadImg()}/>
        <h1>12312312</h1>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { 
    detalheproduto: state.produtoDetail,
    produtos: state.produtos
   }
}

DetalheProduto.propTypes = {
  detalheproduto: PropTypes.object.isRequired,
}

export { DetalheProduto }
export default connect(mapStateToProps, { loadProductDetail })(DetalheProduto)
