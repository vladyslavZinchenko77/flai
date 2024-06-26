import styled from 'styled-components'
import Flex from '../../../../components/Common/Flex/Flex'
import { Divider } from 'antd'
import GeneralInfo from './components/GeneralInfo'
import TrackInfo from './components/TrackInfo'
import CountryInfo from './components/CountryInfo'
import Keywords from './components/Keywords'
import VideosCounter from './components/VideosCounter'

const MainInfoSectionStyled = styled.section`
  width: 100%;
  height: 249px;
  padding: 27px 0 12px 40px;
  background: rgb(19, 19, 20);
`

const MainInfoSection = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <MainInfoSectionStyled>
        <Flex justifyContent="space-between" margin="0 40px 0 0">
          <GeneralInfo />
          <TrackInfo />
          <CountryInfo />
        </Flex>
        <Divider style={{ backgroundColor: '#FFFFFF', opacity: '5%' }} />
        <Keywords />
      </MainInfoSectionStyled>
      <VideosCounter />
    </Flex>
  )
}

export default MainInfoSection
