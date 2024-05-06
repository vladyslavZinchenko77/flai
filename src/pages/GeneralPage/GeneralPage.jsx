import styled from 'styled-components'
import GeneralPageHeader from './components/GeneralPageHeader/GeneralPageHeader'
import MainInfoSection from './components/MainInfoSection/MainInfoSection'
import SoundAudienceSection from './components/SoundAudienceSection/SoundAudienceSection'

const GeneralPageWrap = styled.div`
  width: 67%;
`

const GeneralPage = () => {
  return (
    <GeneralPageWrap>
      <GeneralPageHeader />
      <MainInfoSection />
      <SoundAudienceSection />
    </GeneralPageWrap>
  )
}

export default GeneralPage
