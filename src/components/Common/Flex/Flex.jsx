import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`

export default Flex
