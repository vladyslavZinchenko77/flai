import styled from 'styled-components'
import SvgIcon from '../../../../Common/SvgIcon/SvgIcon'

const BurgerBtnStyled = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212122;
  outline: none;
  box-shadow: none;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: grey;
  }
`

const BurgerBtn = () => {
  return (
    <BurgerBtnStyled type="button">
      <SvgIcon name={'burger'} />
    </BurgerBtnStyled>
  )
}

export default BurgerBtn
