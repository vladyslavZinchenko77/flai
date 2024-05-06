import { Empty } from 'antd'
import YellowBtn from '../../../../../components/Common/YellowBtn/YellowBtn'
import CustomText from '../../../../../components/Common/CustomText/CustomText'
import styled from 'styled-components'


const AdvancedContent = styled.div`
display:flex;
flex-direction: column;
align-items: center;

`

const AdvancedTab = () => {
  return (
    <AdvancedContent>
      <CustomText color="yellow">You have not a premium account😢</CustomText>{' '}
      <YellowBtn margin={"24px 0 24px 0"}>By Premium</YellowBtn>
      <Empty />
    </AdvancedContent>
  )
}

export default AdvancedTab
