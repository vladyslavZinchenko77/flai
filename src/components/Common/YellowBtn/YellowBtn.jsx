import styled from 'styled-components'

const YellowBtnStyled = styled.button`
  margin: ${(props) => props.margin || '0px'};
  padding: 2px 20px;
  color: black;
  background-color: #d1fd0a;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    background-color: #ffffff;
  }
`

const YellowBtn = ({ children, onClick, margin, ...props }) => {
  return (
    <YellowBtnStyled type="button" onClick={onClick} margin={margin} {...props}>
      {children}
    </YellowBtnStyled>
  )
}

export default YellowBtn
