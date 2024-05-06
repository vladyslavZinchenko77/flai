import styled from 'styled-components'

import CustomText from '../../../../../components/Common/CustomText/CustomText'
import Flex from '../../../../../components/Common/Flex/Flex'
import SvgIcon from '../../../../../components/Common/SvgIcon/SvgIcon'

const VideosCounterStyled = styled.div`
  display: flex;
  width: 150px;
  flex-direction: column;
  align-items: center;
  background: rgb(33, 33, 34);
  backdrop-filter: blur(100px);

`

const DailyGrowthStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  width: 150px;
  background: rgb(0, 190, 110);
`

const VideosCounter = () => {
  return (
    <Flex flexDirection="column" >
      <VideosCounterStyled>
        <CustomText margin="31px 0 0 0" fontSize="13px" color="#9E9FA4" >
          🙋‍♂️ Videos
        </CustomText>
        <CustomText margin="12px 0 0 0" fontSize="40px" color="#FFFFFF" >
          1.8M
        </CustomText>
        <Flex style={{ margin: "18px 0  27px 0" }}>
          <SvgIcon name={'play-simple'} />
          <CustomText  fontSize="13px" color="#D1FD0A">
            Watch Videos
          </CustomText>
        </Flex>
      </VideosCounterStyled>
      <DailyGrowthStyled>
        <CustomText margin="18px 0 0 0" fontSize="13px" color="#AAFFDB">
          Daily Growth
        </CustomText>
        <CustomText margin="18px 0 25px 0" fontSize="32px" color="#FFFFFF">
          +100k
        </CustomText>
      </DailyGrowthStyled>
    </Flex>
  )
}

export default VideosCounter
