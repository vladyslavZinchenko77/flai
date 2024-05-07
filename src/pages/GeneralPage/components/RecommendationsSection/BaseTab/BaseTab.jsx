// import React from 'react'
// import { useState } from 'react'
// import styled from 'styled-components'
// import CheckBoxCustom from '../../../../../components/Common/CheckBoxCustom/CheckBoxCustom'
// import CustomText from '../../../../../components/Common/CustomText/CustomText'
// import SvgIcon from '../../../../../components/Common/SvgIcon/SvgIcon'
// import {useRecomendationsList } from "../../../../../store/store"

// const FollowRecomendationsContainer = styled.div`
//   padding: 10px 0;
//   display: flex;
//   justify-content: center;
//   background-color: #212122;
// `
// const FollowRecomendations = styled.div`
//   .text {
//     color: #ffffff;
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 1.6;
//   }
//   .colored {
//     color: #d1fd0a;
//   }
// `
// const RecomendationsGroup = styled.div`
//   margin: 20px 0 62px 0;
// `
// const Recomendation = styled.div``
// const RecomendationItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 20px;
// `
// const RecomendationSubItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 20px;
// `

// const RecomendationItemNoActiveWrap = styled.div`
//   display: inline-block;
// `

// const RecomendationItemNoActive = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 8px 10px;
//   margin-top: 20px;
//   background-color: rgba(255, 255, 255, 0.1);
// `

// const BaseTab = () => {

//   const { recomendations } = useRecomendationsList();

//   return (
//     <>
//       <FollowRecomendationsContainer>
//         <FollowRecomendations>
//           <p className="text">
//             😢 you followed <span className="colored">2/10</span>{' '}
//             recommendations
//           </p>
//         </FollowRecomendations>
//       </FollowRecomendationsContainer>
//       <RecomendationsGroup>
//         {recomendations.map((recomendation, index) => (
//           <Recomendation key={index}>
//             {recomendation.isOpen ? (
//               <RecomendationItem>
//                 <CheckBoxCustom margin={'0 10px 0 0'} defaultChecked={false} />
//                 <CustomText color="#FFFFFF">
//                   {recomendation.main}
//                 </CustomText>
//               </RecomendationItem>
//             ) : (
//               <RecomendationItemNoActiveWrap>
//                 <RecomendationItemNoActive>
//                   <CheckBoxCustom margin={'0 10px 0 0'} />
//                   <CustomText fontsize="12px" color="#8E8F92">
//                     {recomendation.main}
//                   </CustomText>
//                   <SvgIcon name="lock" margin="0 6px" />
//                   <CustomText fontsize="12px" color="#D1FD0A">
//                     Coming Soon
//                   </CustomText>
//                 </RecomendationItemNoActive>
//               </RecomendationItemNoActiveWrap>
//             )}
//             {recomendation.secondary && recomendation.secondary.map((secondary, index) => (
//               <RecomendationSubItem key={index}>
//                 <SvgIcon name="subitem-line" margin={'0 10px 0 10px'} />
//                 <CheckBoxCustom margin={'0 10px 0 0'} defaultChecked={true} />
//                 <CustomText color="#FFFFFF">
//                   {secondary}
//                 </CustomText>
//               </RecomendationSubItem>
//             ))}
//           </Recomendation>
//         ))}
//       </RecomendationsGroup>
//     </>
//   )
// }

// export default BaseTab

import React from 'react'
import styled from 'styled-components'
import CheckBoxCustom from '../../../../../components/Common/CheckBoxCustom/CheckBoxCustom'
import CustomText from '../../../../../components/Common/CustomText/CustomText'
import SvgIcon from '../../../../../components/Common/SvgIcon/SvgIcon'
import { useRecomendationsList } from '../../../../../store/store'

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

const RecomendationItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

const RecomendationSubItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  .subitem-line {
    position: relative;
    bottom: 5px;
  }
`

const RecomendationItemNoActiveWrap = styled.div`
  display: inline-block;
`

const RecomendationItemNoActive = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
`

const BaseTab = () => {
  const { recomendations } = useRecomendationsList()

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
        {recomendations.map((recomendation, index) => (
          <div key={index}>
            {recomendation.isOpen ? (
              <RecomendationItem>
                <CheckBoxCustom margin={'0 10px 0 0'} defaultChecked={false} />
                <CustomText color="#FFFFFF">{recomendation.main}</CustomText>
              </RecomendationItem>
            ) : (
              <RecomendationItemNoActiveWrap>
                <RecomendationItemNoActive>
                  <CheckBoxCustom margin={'0 10px 0 0'} disabled={true} />
                  <CustomText fontsize="12px" color="#8E8F92">
                    {recomendation.main}
                  </CustomText>
                  <SvgIcon name="lock" margin="0 6px" />
                  <CustomText fontsize="12px" color="#D1FD0A">
                    Coming Soon
                  </CustomText>
                </RecomendationItemNoActive>
              </RecomendationItemNoActiveWrap>
            )}
            {recomendation.secondary &&
              recomendation.secondary.map((secondary, index) => (
                <RecomendationSubItem key={index}>
                  <SvgIcon
                    className="subitem-line"
                    name="subitem-line"
                    margin={'0 10px 0 10px'}
                  />
                  <CheckBoxCustom margin={'0 10px 0 0'} defaultChecked={true} />
                  <CustomText color="#FFFFFF">{secondary}</CustomText>
                </RecomendationSubItem>
              ))}
          </div>
        ))}
      </RecomendationsGroup>
    </>
  )
}

export default BaseTab
