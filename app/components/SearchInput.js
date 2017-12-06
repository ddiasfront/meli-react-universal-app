import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { toJS } from 'immutable'
import { SearchTextInput, Wrapper, MainLogo, SearchButton } from '../styled'

class SearchInput extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this._changeSearchField = this._changeSearchField.bind(this);
    this._searchNow = this._searchNow.bind(this);
  }

  _changeSearchField(e) {
    let value = e.currentTarget.value;

    this.setState({
      inputValue: value
    });
    
  }

  _searchNow() {

    this.props.search(this.state.inputValue)
  }


  render() {

    const {
      inputValue
    } = this.state;

    return (
        <Wrapper alignItems="center" positionWrapper="relative">
        <MainLogo src="../assets/images/logo_ml.png"/>
        <SearchTextInput
          type="text"
          placeholder="Nunca dejes de buscar"
          onChange={this._changeSearchField}
          value={ inputValue || '' } />
          <SearchButton onClick={this._searchNow}>
            <img src="../assets/images/ic_Search.png"/>
          </SearchButton>
        </Wrapper>

    )
  }
}

export default SearchInput