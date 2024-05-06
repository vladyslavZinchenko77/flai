import React from 'react'
import styled from 'styled-components'

const TitleSectionStyled = styled.div`
  display: flex;
  align-items: center;

  .title {
    color: #ffffff;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.6;
  }
  .colored {
    color: #d1fd0a;
  }
  .icon {
    margin-right: 6px;
  }
`

const SectionTitle = ({ icon, children }) => {
  return (
    <TitleSectionStyled>
      <div className="icon">{icon}</div>
      <h4 className="title">{children}</h4>
    </TitleSectionStyled>
  )
}

export default SectionTitle
