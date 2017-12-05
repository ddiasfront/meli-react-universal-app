import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { toJS } from 'immutable'

class SearchInput extends Component {

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

    return (
      <div>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          onChange={this._changeSearchField}
          value={ inputValue || '' } />
      </div>
    )
  }
}

export default SearchInput