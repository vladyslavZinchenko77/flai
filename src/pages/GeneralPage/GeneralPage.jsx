import styled from 'styled-components'
import GeneralPageHeader from './components/GeneralPageHeader/GeneralPageHeader'
import MainInfoSection from './components/MainInfoSection/MainInfoSection'

const GeneralPageWrap = styled.div`
  width: 67%;
`

const GeneralPage = () => {
  return (
    <GeneralPageWrap>
      <GeneralPageHeader />
      <MainInfoSection />
    </GeneralPageWrap>
  )
}

export default GeneralPage
