import React, { Component } from 'react'
import { Link } from 'react-router'
import Produto from '../components/Produto'
import PropTypes from 'prop-types'
import { toJS } from 'immutable'
import { Wrapper } from '../styled'

class Produtos extends Component {

  render() {

    let arrayOfProducts = this.props.produtos.get('results').take(4).toJS();

    return (
      <Wrapper flexDirecion="column" alignItems="center">
        {
          arrayOfProducts.map((searchDetails)=> {
            return (  
                <Produto searchDetails={searchDetails}/>
            )
          })
        }
        <Link to={`/questions/not-found`}> This link would be redirected to Index</Link>
      </Wrapper>
    )
  }
}

export default Produtos