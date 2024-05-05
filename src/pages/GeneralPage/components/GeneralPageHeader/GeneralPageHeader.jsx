import styled from 'styled-components'
import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px 40px 0 40px;
`

const HeaderTitle = styled.h4`
  color: rgb(64, 64, 68);
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`
const HeaderUpdateGroup = styled.div`
  display: flex;
`
const HeaderUpdateTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 28px;
`

const HeaderUpdateInfo = styled.p`
  color: rgb(55, 55, 58);
  font-size: 10px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 2;
`
const HeaderBtnGroup = styled.div`
  display: flex;
`

const HeaderBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  box-shadow: none;
  border: none;
  background-color: transparent;
  color: rgb(148, 150, 156);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.6;
  cursor: pointer;
  &:first-child {
    margin-right: 30px;
  }
`

const GeneralPageHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>AI Prediction</HeaderTitle>
      <HeaderUpdateGroup>
        <HeaderUpdateTextGroup>
          <HeaderUpdateInfo>Last update: 13.03.2024</HeaderUpdateInfo>
          <HeaderUpdateInfo>
            Date added to the platform: 17.12.2023
          </HeaderUpdateInfo>
        </HeaderUpdateTextGroup>

        <HeaderBtnGroup>
          <HeaderBtn>
            <SvgIcon name={'update'} margin={'0 6px 0 0'} /> Update
          </HeaderBtn>
          <HeaderBtn>
            <SvgIcon name={'download'} margin={'0 6px 0 0'} /> Download
          </HeaderBtn>
        </HeaderBtnGroup>
      </HeaderUpdateGroup>
    </HeaderWrapper>
  )
}

export default GeneralPageHeader
