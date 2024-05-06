import { useState } from 'react'
import styled from 'styled-components'

const CheckBoxContainer = styled.div`
  margin: ${(props) => props.margin};
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .checked {
    width: 50%;
    height: 10%;
    background-color: #d1fd0a;
  }
  .no-checked {
    width: 50%;
    height: 50%;
    background-color: #d1fd0a;
  }
`

const CheckBoxCustom = ({ margin }) => {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <CheckBoxContainer
      margin={margin}
      onClick={() => {
        setIsChecked(!isChecked)
      }}
    >
      <div className={isChecked ? 'checked' : 'no-checked'}></div>
    </CheckBoxContainer>
  )
}

export default CheckBoxCustom
