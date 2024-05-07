import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'
import styled from 'styled-components'
import HorizontalProgress from '../../../../components/Common/HorizontalProgress/HorizontalProgress'
import Flex from '../../../../components/Common/Flex/Flex'
import SectionTitle from '../../../../components/Common/SectionTitle/SectionTitle'
import { useUserStore } from '../../../../store/store'

const SectionContainer = styled.div`
  padding: 0 40px;
`

const PrograssesContainer = styled.div`
  width: 45%;
`

const SoundAudienceSection = () => {
  const { user } = useUserStore()

  const soundAudience = user.songs.length > 0 ? user.songs[0].soundAudience : []

  return (
    <SectionContainer>
      <section>
        <SectionTitle icon={<SvgIcon name={'people'} />}>
          Sound Audience
        </SectionTitle>

        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          margin="30px 0 0 0"
        >
          <PrograssesContainer>
            {soundAudience.slice(0, 3).map((audience, index) => (
              <HorizontalProgress
                key={index}
                icon={<SvgIcon name={audience.title.toLowerCase()} />}
                progress={audience.percent}
                label={audience.title}
              />
            ))}
          </PrograssesContainer>
          <PrograssesContainer>
            {soundAudience.slice(3).map((audience, index) => (
              <HorizontalProgress
                key={index}
                icon={<SvgIcon name={audience.title.toLowerCase()} />}
                progress={audience.percent}
                label={audience.title}
              />
            ))}
          </PrograssesContainer>
        </Flex>
      </section>
    </SectionContainer>
  )
}

export default SoundAudienceSection
