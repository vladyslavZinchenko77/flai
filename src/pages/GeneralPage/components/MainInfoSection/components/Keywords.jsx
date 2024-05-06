import { Tag } from 'antd'
import CustomText from '../../../../../components/Common/CustomText/CustomText'
import Flex from '../../../../../components/Common/Flex/Flex'

const Keywords = () => {
  return (
    <Flex>
      <CustomText fontSize="12px" color="#8E8F92">
        Keywords:
      </CustomText>
      <Flex style={{ marginLeft: 10 }}>
        <Tag
          style={{
            color: '#FFFFFF',
            backgroundColor: 'rgb(33, 33, 34)',
            border: 'none',
            padding: '5px 16px',
            borderRadius: '20px',
          }}
        >
          Whispering breeze
        </Tag>
        <Tag
          style={{
            color: '#FFFFFF',
            backgroundColor: 'rgb(33, 33, 34)',
            border: 'none',
            padding: '5px 16px',
            borderRadius: '20px',
          }}
        >
          Wandering soul
        </Tag>
        <Tag
          style={{
            color: '#FFFFFF',
            backgroundColor: 'rgb(33, 33, 34)',
            border: 'none',
            padding: '5px 16px',
            borderRadius: '20px',
          }}
        >
          Crimson dawn
        </Tag>
        <Tag
          style={{
            color: '#FFFFFF',
            backgroundColor: 'rgb(33, 33, 34)',
            border: 'none',
            padding: '5px 16px',
            borderRadius: '20px',
          }}
        >
          Echoes of silence
        </Tag>
      </Flex>
    </Flex>
  )
}

export default Keywords
