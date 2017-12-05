import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { toJS } from 'immutable'

class Produtos extends Component {

  render() {

    let arrayOfProducts = this.props.produtos.get('results').toJS();

    return (
      <div>
        Produtos component
        {
          arrayOfProducts.map((q)=> {
            return (
              <div>
                <img src={q.thumbnail}></img>
              </div>
            )
          })
        }
        <Link to={`/questions/not-found`}> This link would be redirected to Index</Link>
      </div>
    )
  }
}

export default Produtos