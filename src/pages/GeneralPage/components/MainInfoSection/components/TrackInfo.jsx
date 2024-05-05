import CustomText from '../../../../../components/Common/CustomText/CustomText'
import Flex from '../../../../../components/Common/Flex/Flex'
import SvgIcon from '../../../../../components/Common/SvgIcon/SvgIcon'

const TrackInfo = () => {
  return (
    <div>
      <CustomText fontSize="12px" color="#FFFFFF">
        🔥🔥🔥 Trending
      </CustomText>
      <Flex style={{ marginTop: 16 }}>
        <CustomText fontSize="12px" color="#8E8F92">
          Duration:
        </CustomText>
        <CustomText margin={'0 0 0 10px'} fontSize="12px" color="#FFFFFF">
          00:45
        </CustomText>
      </Flex>
      <Flex style={{ marginTop: 7 }}>
        <CustomText fontSize="12px" color="#8E8F92">
          Bitrate:
        </CustomText>
        <SvgIcon name={'lock'} margin={'0 0 0 32px'} />
      </Flex>
    </div>
  )
}

export default TrackInfo
