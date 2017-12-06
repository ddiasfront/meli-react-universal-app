import styled from 'styled-components';
import { Link } from 'react-router'
import { Wrapper } from './index'

export const ProdutoWrapper = Wrapper.extend`
  max-width:1200px;
  background-color: #fff;
  padding: 16px;
  flex-direction: column;
  position:relative;
`

export const ProdutoImg = styled.img`
  width:180px;
  height:180px;
  border-radius:4px;
  padding-right:16px; 
`
export const PriceText = styled.span`
font-size:24px;
color: #333;
margin-bottom:32px;
padding-top:16px;
`

export const CityText = styled.span`
color: #999;
font-size:12px;
padding-top: 30px;
`

export const ProdListTitle = styled.h4`
font-size:18px;
color:#333;
`

export const Divisor = styled.div`
  width:100%;
  height:1px;
  background-color:#eee;
`

export const ProductLink = styled(Link)`
position:absolute;
z-index:9999;
width: 100%;
height: 100%;
`

export const DetailImg = styled.img`
width:680px;
`

export const SalesState = styled.span`
  font-size:14px;
  color: #333;
  padding-bottom:16px;
` 

export const DetailTitle = styled.h1`
  font-size:24px;
  color:#333;
  padding-bottom:32px;
  font-weight:bold;
`

export const DetailPrice = styled.span`
  font-size:46px;
  color: #333;
  padding-bottom:32px;
`

export const BotaoComprar = styled.button`
  cursor:pointer;
  width:100%;
  height: 40px;
  background-color: #3483FA;
  display:flex;
  border-radius: 5px;
  color: #eee;
  border:none;
  outline:none;
  font-size:16px;
  flex-direction:column;
  align-items:center;
  padding-top:8px;
`

export const DescripcionTitle = styled.h4`
  color:#333;
  font-size:28px;
  padding-bottom:32px;
`
export const DescriptionDesct = styled.p`
  font-size:16px;
  color:#999;
  padding-bottom:32px;
`