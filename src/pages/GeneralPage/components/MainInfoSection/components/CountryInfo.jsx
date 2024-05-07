import CustomText from '../../../../../components/Common/CustomText/CustomText'
import Flex from '../../../../../components/Common/Flex/Flex'
import SvgIcon from '../../../../../components/Common/SvgIcon/SvgIcon'
import { useUserStore } from '../../../../../store/store'

const CountryInfo = () => {
  const { user } = useUserStore()

  return (
    <div>
      <Flex>
        <CustomText fontSize="12px" color="#8E8F92">
          Country:
        </CustomText>
        <CustomText margin="0 0 0 10px" fontSize="12px" color="#FFFFFF">
          {user.country}
        </CustomText>
        <SvgIcon name={'canada'} margin="0 0 0 9px" />
      </Flex>

      <Flex style={{ marginTop: 12 }}>
        <CustomText fontSize="12px" color="#8E8F92">
          Place in the country:
        </CustomText>
        <CustomText margin="0 0 0 6px" fontSize="12px" color="#FFFFFF">
          {user.songs.length > 0 ? user.songs[0].placeInTheCountry : ''}
        </CustomText>
      </Flex>

      <Flex style={{ marginTop: 15 }}>
        <CustomText fontSize="12px" color="#8E8F92">
          Place in the world:
        </CustomText>
        <CustomText margin="0 0 0 6px" fontSize="12px" color="#FFFFFF">
          {user.songs.length > 0 ? user.songs[0].placeInTheWorld : ''}
        </CustomText>
      </Flex>
    </div>
  )
}

export default CountryInfo
