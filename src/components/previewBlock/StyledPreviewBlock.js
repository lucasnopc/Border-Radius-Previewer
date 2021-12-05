import styled from 'styled-components'
import { AiOutlineCopy } from 'react-icons/ai'

export const StyledPreviewBlock = styled.div `
  display:flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: blueviolet;
  color: aliceblue;
  font-weight: bold;
  padding: 0.5rem;
  div {
    border-radius: ${props => props.propsBorder.radius.tl}px  ${props => props.propsBorder.radius.tr}px  ${props => props.propsBorder.radius.br}px  ${props => props.propsBorder.radius.bl}px ;
    border: 2px solid aliceblue;
    padding: 2rem;
  }
`

export const IconCopy = styled(AiOutlineCopy)
`
    font-size: 30px;
    color: aliceblue;
    position: fixed;
    top: 1rem;
    right:1rem;
    color:blueviolet;
    padding: 0.50rem;
    border-radius: 100%;
    cursor:pointer;
    box-shadow: 0.15rem 0.15rem 0.15rem 0.15rem #00000020;
    background-color: cyan;
`