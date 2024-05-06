import styled from 'styled-components'
import Flex from '../Flex/Flex'

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 8px;
`

const ProgressBar = styled.div`
  height: 4px;
  padding: 2px;
  background-color: #333333;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
`

const ProgressFill = styled.div`
  height: 100%;
  background-color: #d1fd0a;
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease;
  position: relative;
`
const ProgressEnd = styled.div`
  position: absolute;
  right: 0;
  top: -2px;
  bottom: 0;
  height: 8px;
  width: 2px;
  background-color: #ffffff;
`
const ProgressLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 8px;
`
const ProgressPercent = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 8px;
`
const IconContainer = styled.div`
  margin-right: 8px;
`

const HorizontalProgress = ({ label, progress, icon }) => (
  <ProgressContainer>
    <Flex justifyContent="space-between">
      <Flex>
        <IconContainer>{icon}</IconContainer>
        <ProgressLabel>{label}</ProgressLabel>
      </Flex>

      <ProgressPercent>{progress}%</ProgressPercent>
    </Flex>
    <ProgressBar>
      <ProgressFill progress={progress}>
        <ProgressEnd />
      </ProgressFill>
    </ProgressBar>
  </ProgressContainer>
)

export default HorizontalProgress
