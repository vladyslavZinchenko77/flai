import styled from 'styled-components'
import Flex from '../../../../components/Common/Flex/Flex'
import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'
import CustomText from '../../../../components/Common/CustomText/CustomText'
import GeneralInfo from './components/GeneralInfo'
import TrackInfo from './components/TrackInfo'
import CountryInfo from './components/CountryInfo'

const MainInfoSectionStyled = styled.section`
  padding: 27px 0 12px 40px;
`

const MainInfoSection = () => {
  return (
    <MainInfoSectionStyled>
      <Flex justifyContent="space-between">
        <GeneralInfo />
        <TrackInfo />
        <CountryInfo />
      </Flex>

      <div>
        <CustomText fontSize="12px" color="#8E8F92">
          Keywords:
        </CustomText>
      </div>
    </MainInfoSectionStyled>
  )
}

export default MainInfoSection
