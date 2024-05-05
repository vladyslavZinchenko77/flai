import styled from 'styled-components'
import Flex from '../../../../components/Common/Flex/Flex'
import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'

const MainInfoSectionStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27px 0 12px 40px;
`

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

const CustomText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  font-weight: 600;
  line-height: 1.25;
`

const MainInfoSection = () => {
  return (
    <MainInfoSectionStyled>
      <Flex>
        <Preview>
          <SvgIcon name={'play'} />
        </Preview>
        <div>
          <Flex>
            <CustomText fontSize="12px" color="#8E8F92">
              Official Artist{' '}
            </CustomText>
            <SvgIcon name="info" margin="0 0 0 5px" />
          </Flex>
          <CustomText fontSize="18px" margin="3px 0 0" color="#FFFFFF">
            Khabane Lame
          </CustomText>
          <CustomText margin="6px 0 0" fontSize="14px" color="#ffffff">
            Melodic sound
          </CustomText>
          <CustomText margin="8px 0 0" fontSize="12px" color="#8E8F92">
            Type:original
          </CustomText>
          <Flex style={{ marginTop: 8 }}>
            <SvgIcon name={'spotify'} />
            <SvgIcon name={'apple-music'} margin={'0 0 0 5px'} />
            <SvgIcon name={'tik-tok'} margin={'0 0 0 5px'} />
          </Flex>
        </div>
      </Flex>
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
      <div>
        <Flex>
          <CustomText fontSize="12px" color="#8E8F92">
            Country:
          </CustomText>
          <CustomText margin="0 0 0 10px" fontSize="12px" color="#FFFFFF">
            Canada
          </CustomText>
          <SvgIcon name={'canada'} margin="0 0 0 9px"  />
        </Flex>

        <Flex style={{marginTop: 12}}>
          <CustomText fontSize="12px" color="#8E8F92">
            Place in the country:
          </CustomText>
          <CustomText margin="0 0 0 6px" fontSize="12px" color="#FFFFFF">
            05
          </CustomText>
        </Flex>

        <Flex style={{marginTop: 15}}>
          <CustomText fontSize="12px" color="#8E8F92">
            Place in the world:
          </CustomText>
          <CustomText margin="0 0 0 6px" fontSize="12px" color="#FFFFFF">
            43
          </CustomText>
        </Flex>
      </div>
    </MainInfoSectionStyled>
  )
}

export default MainInfoSection
