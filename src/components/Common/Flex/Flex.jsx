import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
`

export default Flex
