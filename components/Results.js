import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Results() {

  const fullScore = useSelector((state) => state.result.numQues)
  const obtainedScore = useSelector((state) => state.result.numCoor)
  const isPass = useSelector((state) => state.result.isPass)

  const passOrFail = () => {
    if (isPass)
      return (
        <div>สอบผ่าน คุณสุดยอด</div>
      )
    else
      return(
        <div>สอบไม่ผ่านนะจ๊ะ</div>
      )
  }

  return (
    <div>
      <h1>{passOrFail()}</h1>
      <h2>คะแนนรวม</h2>
      <h2>{obtainedScore}/{fullScore}</h2>
    </div>
  )
}

export default Results
