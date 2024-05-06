import { useState } from 'react'
import styled from 'styled-components'
import CheckBoxCustom from '../../../../../components/Common/CheckBoxCustom/CheckBoxCustom'
import CustomText from '../../../../../components/Common/CustomText/CustomText'
import SvgIcon from '../../../../../components/Common/SvgIcon/SvgIcon'

const FollowRecomendationsContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  background-color: #212122;
`
const FollowRecomendations = styled.div`
  .text {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.6;
  }
  .colored {
    color: #d1fd0a;
  }
`
const RecomendationsGroup = styled.div`
  margin: 20px 0 62px 0;
`
const Recomendation = styled.div``
const RecomendationItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const RecomendationSubItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const RecomendationItemNoActive = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
`

const BaseTab = () => {
const [isShowDuration, setIsShowDuration] = useState(true)


  return (
    <>
      <FollowRecomendationsContainer>
        <FollowRecomendations>
          <p className="text">
            😢 you followed <span className="colored">2/10</span>{' '}
            recommendations
          </p>
        </FollowRecomendations>
      </FollowRecomendationsContainer>
      <RecomendationsGroup>
        <Recomendation>
          <RecomendationItem>
            <CheckBoxCustom margin={'0 10px 0 0'} defaultChecked={false} />
            <CustomText color="#FFFFFF">
              02:15 Recommendations for your song
            </CustomText>
          </RecomendationItem>
        </Recomendation>
        <Recomendation>
          <RecomendationItem>
            <CheckBoxCustom margin={'0 10px 0 0'} defaultChecked={true} />
            <CustomText color="#FFFFFF">
              Duration for segments of your sound promo
            </CustomText>
          </RecomendationItem>
          <RecomendationSubItem>
            <SvgIcon name="subitem-line" margin={'0 10px 0 10px'} />
            <CheckBoxCustom margin={'0 10px 0 0'} defaultChecked={true}/>

            <CustomText color="#FFFFFF">
              Duration for segments of your sound promo
            </CustomText>
          </RecomendationSubItem>
          <RecomendationSubItem>
            <SvgIcon name="subitem-line" margin={'0 10px 0 10px'} />
            <CheckBoxCustom margin={'0 10px 0 0'} defaultChecked={false} />

            <CustomText color="#FFFFFF">
              Duration for segments of your sound promo
            </CustomText>
          </RecomendationSubItem>
        </Recomendation>
        <Recomendation>
          <RecomendationItemNoActive>
            <CheckBoxCustom margin={'0 10px 0 0'} />
            <CustomText fontsize="12px" color="#8E8F92">
              Release day
            </CustomText>
          </RecomendationItemNoActive>
        </Recomendation>
        <Recomendation>
          <RecomendationItem>
            <CheckBoxCustom margin={'0 10px 0 0'} />
            <CustomText color="#FFFFFF">Promotion</CustomText>
          </RecomendationItem>
        </Recomendation>
        <Recomendation>
          <RecomendationItemNoActive>
            <CheckBoxCustom margin={'0 10px 0 0'} />
            <CustomText fontsize="12px" color="#8E8F92">
              Duet
            </CustomText>
            <SvgIcon name={'lock'} margin={'0 6px 0 20px'} />
            <CustomText fontsize="12px" color="#D1FD0A">
              Coming Soon
            </CustomText>
          </RecomendationItemNoActive>
        </Recomendation>
        <Recomendation>
          <RecomendationItemNoActive>
            <CheckBoxCustom margin={'0 10px 0 0'} />
            <CustomText fontsize="12px" color="#8E8F92">
              The best location for the potential of your sound
            </CustomText>
            <SvgIcon name={'lock'} margin={'0 6px 0 20px'} />
            <CustomText fontsize="12px" color="#D1FD0A">
              Coming Soon
            </CustomText>
          </RecomendationItemNoActive>
        </Recomendation>
      </RecomendationsGroup>
    </>
  )
}

export default BaseTab
