import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { toJS } from 'immutable'

class Produtos extends Component {

  constructor() {
    super();
    this._changeSearchField = this._changeSearchField.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  _changeSearchField(e) {
    let value = e.currentTarget.value;

    this.setState({
      inputValue: value
    });

    if ( value.length >= 2) {
      this.props.search(value)
    }

  }


  render() {

    const {
      inputValue
    } = this.state;

    let arrayOfProducts = this.props.produtos.get('results').toJS();

    return (
      <div>
        Produtos component
        <input
                type="text"
                placeholder="Encontre de A a Z"
                onChange={this._changeSearchField}
                value={ inputValue || '' } />
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