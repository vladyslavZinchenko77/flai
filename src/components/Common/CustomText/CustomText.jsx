import styled from 'styled-components'

const CustomText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  font-weight: 600;
  line-height: 1.25;
`
export default CustomText
