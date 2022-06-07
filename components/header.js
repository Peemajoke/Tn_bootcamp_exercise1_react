import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, {css} from "styled-components"

const Container = styled.div` 
  text-align: center;
  font-size: large;
  color: saddlebrown
  `;

function Header() {

    const theName = useSelector((state) => state.name.value)

  return (
    <div style={{ width: '100%', height: '54px', background: 'lemonchiffon'}}>
      <div style={{margin: 'auto',  width: '100%', border: '3px solid darkgoldenrod', padding: '10px', flexDirection: 'row', display: 'flex'}}>
        <Container style={{width: "90%", textAlign: "left"}}>Hakoot!</Container>
        <Container style={{}}>{theName}</Container>
      </div>
    </div>
  )
}

export default Header
