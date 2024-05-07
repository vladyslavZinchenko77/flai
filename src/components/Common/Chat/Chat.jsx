import { useState } from 'react'
import Message from './Message'
import styled from 'styled-components'
import CustomText from '../CustomText/CustomText'
import avatarimg from '../../../../src/assets/jpg/animoji.jpeg'
import avatarAiimg from '../../../../src/assets/jpg/ai.jpeg'
import SvgIcon from '../SvgIcon/SvgIcon'

const ChatContainer = styled.div`
  width: 26%;
`

const PremiumBanner = styled.div`
  width: 100%;
  padding: 20px 0 20px 20px;
  background-color: #d1fd0a;
`

const PremiumBannerBtn = styled.button`
  margin-top: 12px;
  padding: 6px 15px;
  color: #ffffff;
  outline: none;
  box-shadow: none;
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 110%;
  border-radius: 5px;
  transition: 0.2s;
  background-color: #000000;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: #000000;
    background-color: #ffffff;
  }
`

const InputWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 0;
  left: 74%;
  display: flex;
  align-items: center;
  background-color: #212122;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
`

const Input = styled.input`
  flex: 1;
  background-color: #212122;
  border: none;
  outline: none;
  color: #fff;
  border: none;
  font-size: 14px;
  &::placeholder {
    color: #ccc;
  }
`

const SendButton = styled.button`
  background-color: #212122;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
`

export const Chat = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <ChatContainer>
      <PremiumBanner>
        <CustomText fontsize="10px" color="#6F8800">
          Free Plan
        </CustomText>
        <CustomText margin="3px 0 0 0" fontsize="16px" color="#000000">
          There are 10 free requests left
        </CustomText>
        <PremiumBannerBtn>Buy Premium</PremiumBannerBtn>
      </PremiumBanner>
      <div>
        <Message
          avatarUrl={avatarimg}
          name={'You'}
          time={'3m ago'}
          text={'ccercercweddwecnbhjc jncrekjcej'}
        />
        <Message
          avatarUrl={avatarAiimg}
          name={'GE'}
          time={'2m ago'}
          text={'cewdcwcwc crceece cecercerc ccsdd'}
        />
      </div>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Enter your request..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <SendButton>
          <span role="img" aria-label="airplane">
            <SvgIcon name={'plane'} />
          </span>
        </SendButton>
      </InputWrapper>
    </ChatContainer>
  )
}
