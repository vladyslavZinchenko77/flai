import React from 'react'
import Chart from '../../../../components/Common/Chart/Chart'
import SectionTitle from '../../../../components/Common/SectionTitle/SectionTitle'
import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'
import CustomText from '../../../../components/Common/CustomText/CustomText'
import styled from 'styled-components'

const SectionContainer = styled.div`
  padding: 0 40px;
  margin-top: 56px;
`
const GrowthHeader = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`
const GrowthHeaderItem = styled.div`
  display: flex;
  margin-right: 5px;
  align-items: center;
  border: 1px solid grey;
  border-radius: 20px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 14px;
  background: ${(props) => props.background};
  border-radius: 20px;
  z-index: 5;
`

const data = [
  { name: 'MO', 'Growth': 50000, 'AI Prediction': 0 },
  { name: 'TU', 'Growth': 70000, 'AI Prediction': 0 },
  { name: 'WE', 'Growth': 100000, 'AI Prediction': 0 },
  { name: 'TH', 'Growth': 120000, 'AI Prediction': 150000 },
  { name: 'FR', 'Growth': 180000, 'AI Prediction': 200000 },
  { name: 'SA', 'Growth': 250000, 'AI Prediction': 220000 },
  { name: 'SU', 'Growth': 300000, 'AI Prediction': 240000 },
  { name: 'MO', 'Growth': 0, 'AI Prediction': 320000 },
  { name: 'TU', 'Growth': 0, 'AI Prediction': 380000 },
  { name: 'WE', 'Growth': 0, 'AI Prediction': 0 },
  { name: 'TH', 'Growth': 0, 'AI Prediction': 0 },
  { name: 'FR', 'Growth': 0, 'AI Prediction': 0 },
]

const GrowthSection = () => {
  return (
    <SectionContainer>
      <SectionTitle icon={<SvgIcon name={'growth'} />}>
        <span>Growth</span>
      </SectionTitle>
      <GrowthHeader>
        <GrowthHeaderItem>
          <IconContainer
            style={{ padding: '11px 18px' }}
            background="linear-gradient(180.00deg, rgb(255, 152, 251),rgb(255, 231, 105)),rgb(255, 255, 255)"
          >
            <SvgIcon name={'like'} />
          </IconContainer>

          <CustomText margin="0 20px 0 10px" color="#FFFFFF" fontsize="12px">
            High Trending Chance
          </CustomText>
        </GrowthHeaderItem>

        <GrowthHeaderItem>
          <IconContainer background="#00FF94">
            <SvgIcon name={'constellation'} />{' '}
            <CustomText fontsize="20px" fontWeight="bold">
              8
            </CustomText>
          </IconContainer>
          <CustomText margin="0 20px 0 10px" color="#FFFFFF" fontsize="12px">
            Sound assessment from our AI
          </CustomText>
        </GrowthHeaderItem>

        <GrowthHeaderItem>
          <IconContainer background="#FFE600">
            <SvgIcon name={'geolocation'} />{' '}
            <CustomText fontsize="20px">25%</CustomText>
          </IconContainer>
          <CustomText margin="0 20px 0 10px" color="#FFFFFF" fontsize="12px">
            Geo Popularity
          </CustomText>
        </GrowthHeaderItem>
      </GrowthHeader>
      <Chart style={{ marginTop: 24 }} data={data} />
    </SectionContainer>
  )
}

export default GrowthSection
