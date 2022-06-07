import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, {css} from "styled-components"

function Results() {

  //css
  const Div = styled.div`
  font-size: 50px; 
  text-align:center; 
  padding-top:0px;
  color: ${(props) => props.textColor || "black"}
`

  const H2 = styled.h2`
  font-size: 30px; 
  color:saddlebrown; 
  text-align:center; 
  padding-top:0px;
`

  const fullScore = useSelector((state) => state.result.numQues)
  const obtainedScore = useSelector((state) => state.result.numCoor)
  const isPass = useSelector((state) => state.result.isPass)

  const passOrFail = () => {
    if (isPass)
      return (
        <Div textColor="green">สอบผ่าน คุณสุดยอด</Div>
      )
    else
      return(
        <Div textColor="red">สอบไม่ผ่านนะจ๊ะ</Div>
      )
  }

  return (
    <div>
      <h1 style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>{passOrFail()}</h1>
      <H2 style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>คะแนนรวม</H2>
      <H2 style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>{obtainedScore}/{fullScore}</H2>
    </div>
  )
}

export default Results
