import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../../../components/Common/SectionTitle/SectionTitle'
import SvgIcon from '../../../../components/Common/SvgIcon/SvgIcon'
import { Tabs } from 'antd'
import BaseTab from './BaseTab/BaseTab'

const { TabPane } = Tabs

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    .ant-tabs-tab {
      color: #8e8f92; 
    }

    .ant-tabs-tab-active {
      color: #d1fd0a;
    }
  }
`

const SectionContainer = styled.div`
  margin-top: 52px;
  padding: 0 40px;
`

const RecommendationsSection = () => {
  return (
    <SectionContainer>
      <section>
        <SectionTitle icon={<SvgIcon name={'stars'} />}>
          <span className="colored">Recommendations</span> from AI
        </SectionTitle>
      </section>
      <StyledTabs defaultActiveKey="1">
        <TabPane tab={<span>Base</span>} key="1">
          <BaseTab />
        </TabPane>
        <TabPane
          tab={
            <span>
              <SvgIcon name={'lock'} margin={'0 5px 0 0'} />
              Advanced
            </span>
          }
          key="2"
        >
          Content of Tab Pane 2
        </TabPane>
      </StyledTabs>
    </SectionContainer>
  )
}

export default RecommendationsSection
