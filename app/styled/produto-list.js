import styled from 'styled-components';

import { Wrapper } from './index'

export const ProdutoWrapper = Wrapper.extend`
  max-width:1200px;
  background-color: #fff;
  padding: 16px;
  flex-direction: column;
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