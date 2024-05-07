import styled from 'styled-components'

const ColapseBtnContainer = styled.button`
  display: flex;
  padding: 0 5px;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 90px;
  bottom: 0;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transition: 0.2s;

    path {
      stroke: #ffffff;
    }
  }
`

const ColapseBtn = () => {
  return (
    <ColapseBtnContainer type="button">
      <svg
        width="6"
        height="23"
        viewBox="0 0 6 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector 1"
          d="M1 1L3.48 9.27C3.82 10.4 3.82 11.59 3.48 12.72L1 21"
          stroke="#5F6062"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </ColapseBtnContainer>
  )
}

export default ColapseBtn
