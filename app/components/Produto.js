import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Divisor, ProdutoWrapper, ProdutoImg, Wrapper, PriceText, CityText, ProdListTitle , ProductLink} from '../styled'

class Produto extends Component {

  render() {
  
    let { produto } = this.props

    const RenderIconFreeShipping = () => {
      if (this.props.searchDetails.shipping.freeShipping) {
        return (
          <img src="../assets/images/ic_shipping.png"/>
        )
      }
    }
    
    return (
      <ProdutoWrapper>
     
        <Helmet
          title={'Produtos '}
        />

        <Wrapper wrapperPadding="0 0 16px 0px">

          <Wrapper flexSize="2">
            <Wrapper wrapperWidth="auto">
              <ProdutoImg src={this.props.searchDetails.thumbnail} />
            </Wrapper>
            <Wrapper flexDirecion="column" wrapperWidth="auto">
              <PriceText>{'$ ' + this.props.searchDetails.price} {RenderIconFreeShipping()}</PriceText>
              <ProdListTitle> {this.props.searchDetails.title}</ProdListTitle>
            </Wrapper>
          </Wrapper>

          <Wrapper flexDirecion={"row"} flexSize="0.38">
            <Wrapper wrapperWidth="auto">
              <CityText>{this.props.searchDetails.sellerAddress.city.name}</CityText>
            </Wrapper>
          </Wrapper>
         
          
        </Wrapper>

        <Divisor/>
        <ProductLink to={`/produtos/${this.props.searchDetails.id}`}/>
      </ProdutoWrapper>


    )
  }
}


Produto.propTypes = {
  id: PropTypes.string.isRequired
}

export default Produto
