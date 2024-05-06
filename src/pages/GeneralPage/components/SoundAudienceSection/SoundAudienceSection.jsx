import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'
import styled from 'styled-components'
import HorizontalProgress from '../../../../components/Common/HorizontalProgress/HorizontalProgress'
import Flex from '../../../../components/Common/Flex/Flex'

const SectionContainer = styled.div`
  padding: 0 40px;
`

const SectionTitleStyled = styled.h4`
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`

const PrograssesContainer = styled.div`
  width: 45%;
`

const SoundAudienceSection = () => {
  return (
    <SectionContainer>
      <section>
        <Flex>
          <SvgIcon name={'people'} margin={'0 6px 0 0'} />
          <SectionTitleStyled fontsize="20px">
            Sound Audience
          </SectionTitleStyled>
        </Flex>

        <Flex justifyContent="space-between" margin="30px 0 0 0">
          <PrograssesContainer>
            <HorizontalProgress
              icon={<SvgIcon name={'beauty'} />}
              progress={40}
              label={'Beauty'}
            />
            <HorizontalProgress
              icon={<SvgIcon name={'music'} />}
              progress={31}
              label={'Music'}
            />
            <HorizontalProgress
              icon={<SvgIcon name={'travel'} />}
              progress={22}
              label={'Travel'}
            />
          </PrograssesContainer>
          <PrograssesContainer>
            <HorizontalProgress
              icon={<SvgIcon name={'show'} />}
              progress={14}
              label={'Show'}
            />
            <HorizontalProgress
              icon={<SvgIcon name={'health'} />}
              progress={9}
              label={'Health'}
            />
            <HorizontalProgress
              icon={<SvgIcon name={'other'} />}
              progress={6}
              label={'Other'}
            />
          </PrograssesContainer>
        </Flex>
      </section>
    </SectionContainer>
  )
}

export default SoundAudienceSection
