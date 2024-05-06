import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'
import styled from 'styled-components'
import HorizontalProgress from '../../../../components/Common/HorizontalProgress/HorizontalProgress'

const SectionTitleStyled = styled.h4`
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`

const SoundAudienceSection = () => {
  return (
    <section>
      <SvgIcon name={'people'} />
      <SectionTitleStyled>Sound Audience</SectionTitleStyled>
      <div>
        <HorizontalProgress
          icon={<SvgIcon name={'beauty'} />}
          progress={40}
          label={'Beauty'}
        />
      </div>
    </section>
  )
}

export default SoundAudienceSection
