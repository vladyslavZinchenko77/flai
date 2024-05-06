import styled from 'styled-components'
import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'
import Flex from '../../../../components/Common/Flex/Flex'
import CustomText from '../../../../components/Common/CustomText/CustomText'
import YellowBtn from '../../../../components/Common/YellowBtn/YellowBtn'
import SectionTitle from '../../../../components/Common/SectionTitle/SectionTitle'

const SectionContainer = styled.div`
  padding: 0 40px;
  margin-top: 48px;
`
const NotifyMeContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  background-color: #212122;
`

const NotifyMe = styled.div`
  display: flex;
  align-items: center;
`

const RelatedSoundsSection = () => {
  return (
    <SectionContainer>
      <section>
        <SectionTitle icon={<SvgIcon name={'related'} />}>
          <span className="colored">Related</span> Sounds
        </SectionTitle>
        <NotifyMeContainer>
          <NotifyMe>
            <SvgIcon name="bell-clipart" />
            <CustomText fontsize="12px" color="#FFFFFF">
              Notify me when these features start working
            </CustomText>
            <YellowBtn
              margin=" 0 0 0 10px"
              onClick={() => {
                console.log('Notify Me')
              }}
            >
              Notify Me
            </YellowBtn>
          </NotifyMe>
        </NotifyMeContainer>
      </section>
    </SectionContainer>
  )
}

export default RelatedSoundsSection
