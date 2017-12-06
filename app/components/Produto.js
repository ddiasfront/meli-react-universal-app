import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ProdutoWrapper, ProdutoImg, Wrapper } from '../styled'

class Produto extends Component {

  render() {
    let { produto } = this.props
    return (
      <ProdutoWrapper>
        <Helmet
          title={'Question '}
        />

        <Wrapper flexSize="2">
          <Wrapper wrapperWidth="auto">
            <ProdutoImg src={this.props.searchDetails.thumbnail} />
          </Wrapper>
          <Wrapper flexDirecion="column" wrapperWidth="auto">
            <span>{'$ ' + this.props.searchDetails.price}</span>
            <h4> {this.props.searchDetails.title}</h4>
          </Wrapper>
        </Wrapper>

        <Wrapper flexDirecion={"row-reverse"} flexSize="0.6">
          <Wrapper wrapperWidth="auto">
            <span>{this.props.searchDetails.sellerAddress.city.name}</span>
          </Wrapper>
        </Wrapper>
      </ProdutoWrapper>
    )
  }
}


Produto.propTypes = {
  id: PropTypes.string.isRequired
}

export default Produto
