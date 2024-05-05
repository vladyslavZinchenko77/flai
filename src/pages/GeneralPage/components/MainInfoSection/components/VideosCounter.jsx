import styled from 'styled-components'

import CustomText from '../../../../../components/Common/CustomText/CustomText'
import Flex from '../../../../../components/Common/Flex/Flex'
import SvgIcon from '../../../../../components/Common/SvgIcon/SvgIcon'

const VideosCounterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(33, 33, 34);
  backdrop-filter: blur(100px);
  padding: 30px 26px;
`

const DailyGrowthStyled = styled.div`
  padding: 31px;
  background: rgb(0, 190, 110);
`

const VideosCounter = () => {
  return (
    <Flex flexDirection="column">
      <VideosCounterStyled>
        <CustomText fontSize="13px" color="#9E9FA4">
          🙋‍♂️ Videos
        </CustomText>
        <CustomText margin="12px 0 0" fontSize="40px" color="#FFFFFF">
          1.8M
        </CustomText>
        <Flex style={{ marginTop: 18 }}>
          <SvgIcon name={'play-simple'} />
          <CustomText margin="0 0 0 4px" fontSize="13px" color="#D1FD0A">
            Watch Videos
          </CustomText>
        </Flex>
      </VideosCounterStyled>
      <DailyGrowthStyled>
        <CustomText fontSize="13px" color="#AAFFDB">
          Daily Growth
        </CustomText>
        <CustomText margin="18px 0 0 0" fontSize="32px" color="#FFFFFF">
          +100k
        </CustomText>
      </DailyGrowthStyled>
    </Flex>
  )
}

export default VideosCounter
