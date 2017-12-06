import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProductDetail, searchProdutos } from 'actions/produtos'
import Helmet from 'react-helmet'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { toJS } from 'immutable'
import { DescripcionTitle, DescriptionDesct, BotaoComprar, SearchBar, Container, Wrapper, DetailImg, SalesState, DetailTitle, DetailPrice} from '../styled'
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

        <Wrapper flexDirecion="column">
        <Container flexDirecion="column" backgroundColor="#fff" containerPadding="32px" containerBorderRadius="4px">
          <Container>
            <Wrapper  flexSize="1">
                <DetailImg src={loadImg()}/>
            </Wrapper>
            <Wrapper flexDirecion="column" flexSize="0.5">
                <SalesState>{spec.condition ? 'Nuevo' : false} - {spec.soldQuantity} Vendidos</SalesState>
                <DetailTitle>{spec.title}</DetailTitle>
                <DetailPrice>{'$' + spec.price}</DetailPrice>       
                <BotaoComprar>Comprar</BotaoComprar>         
            </Wrapper>
          </Container>
          <Wrapper wrapperPadding="135px 0px 0px 0px">
            <Container flexDirecion="column"> 
              {desc.plainText ? <DescripcionTitle>Descripción del produto</DescripcionTitle> : false}
              {desc.plainText ? <DescriptionDesct>{desc.plainText}</DescriptionDesct> : false}
            </Container>    
          </Wrapper>
          </Container>
        </Wrapper>
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
