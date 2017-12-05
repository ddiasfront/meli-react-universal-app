import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Produto extends Component {

  render() {
    let { produto } = this.props
    return (
      <div>
        <Helmet
          title={'Question '}
        />
        <h4> {this.props.searchDetails.title}</h4>
        <span>{this.props.searchDetails.sellerAddress.city.name}</span>
        <span>{this.props.searchDetails.sellerAddress.city.name}</span>
        <img src={this.props.searchDetails.thumbnail} />
        <span>{this.props.searchDetails.price}</span>
      </div>
    )
  }
}


Produto.propTypes = {
  id: PropTypes.string.isRequired
}

export default Produto
