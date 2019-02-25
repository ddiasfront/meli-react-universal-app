import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components';
import { SearchBar, Container } from '../styled'
import SearchInput from 'components/SearchInput'
import { loadProdutos, searchProdutos } from 'actions/produtos'

injectGlobal`
html{
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
}
body {
  opacity: 1;
  transition: all 0.5s;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
  background-color: #eee;
  font-family: Arial;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          defaultTitle="Mercado Livre APP"
          titleTemplate="%s - React Universal"
          meta={[
            {"name": "description", "content": "Uma aplicação contendo React Universal e Redux para o Meli, all the best."},
          ]}
          htmlAttributes={{"lang": "en"}}
        />
         <SearchBar>
           <Container> 
            <SearchInput search={this.props.searchProdutos}/>
          </Container>
        </SearchBar>
        {this.props.children}
      </div>
    )
  }
}
function mapStateToProps (state) {
  return { produtos: state.produtos }
}


export default connect(mapStateToProps, {loadProdutos, searchProdutos})(App)


