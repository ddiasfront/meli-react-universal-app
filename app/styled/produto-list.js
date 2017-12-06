import styled from 'styled-components';

import { Wrapper } from './index'

export const ProdutoWrapper = Wrapper.extend`
  max-width:75vw;
`

export const ProdutoImg = styled.img`
  width:180px;
  height:180px;
  border-radius:4px;
`