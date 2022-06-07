import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Results() {

  const fullScore = useSelector((state) => state.result.numQues)
  const obtainedScore = useSelector((state) => state.result.numCoor)
  const isPass = useSelector((state) => state.result.isPass)

  const passOrFail = () => {
    if (isPass)
      return (
        <div style={{ color: 'limegreen'}}>สอบผ่าน คุณสุดยอด</div>
      )
    else
      return(
        <div style={{ color: 'red'}}>สอบไม่ผ่านนะจ๊ะ</div>
      )
  }

  return (
    <div>
      <h1 style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>{passOrFail()}</h1>
      <h2 style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>คะแนนรวม</h2>
      <h2 style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>{obtainedScore}/{fullScore}</h2>
    </div>
  )
}

export default Results
