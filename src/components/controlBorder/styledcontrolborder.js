import styled from 'styled-components'

export const StyledControlBorder = styled.div `
  background-color: azure;
  display:flex;
  align-items: center;
  padding: 2rem;
  min-height: 50vh;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
`
export const ColumnControl = styled.div `
  display:flex;
  flex-direction: row;
 div {
    padding: 0.25rem;
    width: 100%;
    label {
      font-weight: bold;
      display:block;
      text-align: center;
    }
    input {
      padding: 1rem;
      width: 100%;
      border: 1px solid blueviolet
    }
    input:focus {
      outline: none;
      border: nonde;
    }
  }
`