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
    this._clearInputAndMove = this._clearInputAndMove.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _changeSearchField(e) {
    let value = e.currentTarget.value;

    this.setState({
      inputValue: value
    });
    
  }

  _searchNow() {
    if ( this.state.inputValue !== undefined && this.state.inputValue !== '')  {
      this.props.search(this.state.inputValue)
    }
  }

  _clearInputAndMove() {
    this.setState({
      inputValue: ''
    });
    this.props.history.push('/')
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
     this.props.search(this.state.inputValue)
    }
  }
  

  render() {

    const {
      inputValue
    } = this.state;

    return (
        <Wrapper alignItems="center" positionWrapper="relative">
        <Link to="/produtos" onClick={this._clearInputAndMove}><MainLogo src="../assets/images/logo_ml.png"/></Link>
        <SearchTextInput
          type="text"
          placeholder="Nunca dejes de buscar"
          onChange={this._changeSearchField}
          onKeyPress={this._handleKeyPress}
          value={ inputValue || '' } />
          
        <Link to={`/produtos/${this.state.inputValue}`}>
          <SearchButton>
            <img src="../assets/images/ic_Search.png"/>
          </SearchButton></Link>
        </Wrapper>

    )
  }
}

export default SearchInput