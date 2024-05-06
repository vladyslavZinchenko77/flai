import { Avatar, Divider} from 'antd'
import Flex from '../Flex/Flex'
import styled from 'styled-components'



const MessageContainer = styled.div`
margin-top: 24px;
padding: 24px 15px 0 15px;
`

const HeaderMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .message-name {
    margin-left: 10px;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.6;
  }
  .message-time {
    color: rgb(86, 89, 92);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.6;
  }
`
const MessageText = styled.p`

color: #ffffff;
font-family: Inconsolata;
font-size: 16px;
font-weight: 600;
line-height: 1.6;

`

const Message = ({ name, time, avatarUrl, text }) => {
  return (
    <MessageContainer>
      <HeaderMessage>
        <Flex>
          <Avatar src={avatarUrl} /> <p className="message-name">{name}</p>
        </Flex>
        <p className="message-time">{time}</p>
      </HeaderMessage>
      <MessageText >{text}</MessageText >
      <Divider style={{backgroundColor: 'grey', marginTop: 15}}/>
    </MessageContainer>
  )
}

export default Message
