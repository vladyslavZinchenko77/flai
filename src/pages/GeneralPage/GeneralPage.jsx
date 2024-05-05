import styled from "styled-components"
import GeneralPageHeader from "./components/GeneralPageHeader/GeneralPageHeader"



const GeneralPageWrap = styled.div`
width: 67%;
`

const GeneralPage = () => {
  return <GeneralPageWrap><GeneralPageHeader/></GeneralPageWrap>
}

export default GeneralPage
