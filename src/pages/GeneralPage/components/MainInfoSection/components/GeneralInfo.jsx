import styled from 'styled-components'
import Flex from '../../../../../components/Common/Flex/Flex'
import CustomText from '../../../../../components/Common/CustomText/CustomText'
import SvgIcon from '../../../../../components/Common/SvgIcon/SvgIcon'
import { useUserStore } from '../../../../../store/store'

const Preview = styled.div`
  margin-right: 20px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
`

const GeneralInfo = () => {
  const { user } = useUserStore()

  const song = user.songs.length > 0 ? user.songs[0] : null

  return (
    <Flex>
      <Preview>
        <SvgIcon name={'play'} />
      </Preview>
      <div>
        <Flex>
          <CustomText fontSize="12px" color="#8E8F92">
            {user.isOfficial ? 'Official Artist' : 'Artist'}
            {user.isOfficial && <SvgIcon name="info" margin="0 0 0 5px" />}
          </CustomText>
        </Flex>
        <CustomText fontSize="18px" margin="3px 0 0" color="#FFFFFF">
          {song ? song.title : ''}
        </CustomText>
        <CustomText margin="6px 0 0" fontSize="14px" color="#ffffff">
          {song ? song.genre : ''}
        </CustomText>
        <CustomText margin="8px 0 0" fontSize="12px" color="#8E8F92">
          Type: {song ? song.type : ''}
        </CustomText>
        <Flex style={{ marginTop: 8 }}>
          <SvgIcon name={'spotify'} />
          <SvgIcon name={'apple-music'} margin={'0 0 0 5px'} />
          <SvgIcon name={'tik-tok'} margin={'0 0 0 5px'} />
        </Flex>
      </div>
    </Flex>
  )
}

export default GeneralInfo
