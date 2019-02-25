import styled from 'styled-components';


export const Wrapper = styled.div`
 width: ${props => props.wrapperWidth ? props.wrapperWidth : '100%'};
 display: flex;
 padding: ${props => props.wrapperPadding ? props.wrapperPadding : '0'};
 align-items: ${props => props.alignItems ? props.alignItems : 'none'};
 position: ${props => props.positionWrapper ? props.positionWrapper : 'auto'};
 flex-direction : ${props => props.flexDirecion ? props.flexDirecion : 'auto'};
 flex: ${props => props.flexSize ? props.flexSize : false};
`

export const SearchBar = Wrapper.extend`
background-color: #FFE600;
margin-bottom:16px;
`

export const Container = styled.div`
 max-width: 1200px;
 display:flex;
 margin: 0 auto;
 flex-direction: ${props => props.flexDirecion ? props.flexDirecion : 'auto'};
 background-color: ${props => props.backgroundColor ? props.backgroundColor : 'auto'};
 padding: ${props => props.containerPadding ? props.containerPadding : '0'};
 border-radius: ${props =>  props.containerBorderRadius ?  props.containerBorderRadius : 'auto'}
`

export const SearchTextInput = styled.input`
  width:70vw;
  display:flex;
  color:#999;
  font-size:12px;
  background-color: #fff;
  outline: none;
  border:none;
  height: 40px;
  border-radius: 4px;
  margin-bottom:10px;
  margin-top:10px;
  padding-left:10px;
  margin-left:20px;
`

export const SearchButton = styled.button`
  width:40px;
  height:42px;
  background-color: #eee;
  position:absolute;
  right:0;
  border-radius: 0 5px 5px 0px;
  border:none;
  outline:none;
  z-index:0;
  cursor:pointer;
  top: 10px;
}
`

export const MainLogo = styled.img`
`

