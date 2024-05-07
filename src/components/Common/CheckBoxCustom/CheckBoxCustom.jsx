import React, { useState } from 'react';
import styled from 'styled-components';

const CheckBoxContainer = styled.div`
  margin: ${(props) => props.margin};
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
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
  .disable {
    background-color: none; /* добавленный стиль */
  }
`;

const CheckBoxCustom = ({ margin, defaultChecked = false, disabled = false, onClick }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <CheckBoxContainer
      margin={margin}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          setIsChecked(!isChecked);
        }
      }}
    >
      <div className={!disabled ? (isChecked ? 'checked' : 'no-checked') : ('disable')}></div>
    </CheckBoxContainer>
  );
};

export default CheckBoxCustom;
