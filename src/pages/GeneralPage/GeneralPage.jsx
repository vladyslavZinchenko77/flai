import styled from 'styled-components'
import GeneralPageHeader from './components/GeneralPageHeader/GeneralPageHeader'
import MainInfoSection from './components/MainInfoSection/MainInfoSection'
import SoundAudienceSection from './components/SoundAudienceSection/SoundAudienceSection'
import RelatedSoundsSection from './components/RelatedSoundsSection/RelatedSoundsSection'
import RecommendationsSection from './components/RecommendationsSection/RecommendationsSection'
import GrowthSection from './components/GrowthSection/GrowthSection'

const GeneralPageWrap = styled.div`
  width: 67%;
  margin-left: 103px;
`

const GeneralPage = () => {
  return (
    <GeneralPageWrap>
      <GeneralPageHeader />
      <MainInfoSection />
      <GrowthSection />
      <SoundAudienceSection />
      <RelatedSoundsSection />
      <RecommendationsSection />
    </GeneralPageWrap>
  )
}

export default GeneralPage
