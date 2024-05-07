import { Tag } from 'antd'
import CustomText from '../../../../../components/Common/CustomText/CustomText'
import Flex from '../../../../../components/Common/Flex/Flex'
import { useUserStore } from '../../../../../store/store'

const Keywords = () => {
  const { user } = useUserStore()

  const keywords = user.songs.length > 0 ? user.songs[0].keywords : []

  return (
    <Flex>
      <CustomText fontSize="12px" color="#8E8F92">
        Keywords:
      </CustomText>
      <Flex style={{ marginLeft: 10 }}>
        {keywords.map((keyword, index) => (
          <Tag
            key={index}
            style={{
              color: '#FFFFFF',
              backgroundColor: 'rgb(33, 33, 34)',
              border: 'none',
              padding: '5px 16px',
              borderRadius: '20px',
            }}
          >
            {keyword}
          </Tag>
        ))}
      </Flex>
    </Flex>
  )
}

export default Keywords
