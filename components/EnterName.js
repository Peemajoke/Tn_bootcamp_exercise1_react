import React, { useCallback, useState } from 'react'
import { Input, Button } from 'antd';
import styled from 'styled-components'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

function EnterName() {

  //CSS
  const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: goldenrod;
  }
`;

  const [playerName, setPlayerName] = useState('');

  function sentName(text){
    console.log(playerName)
    const temp = {
      type: 'nameMode',
      value: text
    }
    console.log(temp)
    return temp
  }

  const dispatch = useDispatch()
  const theName = useSelector((state) => state.name.value)
  const changeName = useCallback(() => dispatch(sentName(playerName))) //don't add [dispatch] cuz it will not update variable playerName

  const handleChangeText = (event) => {
    setPlayerName(event.target.value);
    console.log(playerName)
  }

  //CSS
//   const Button = styled.button`
// color: palevioletred;
// // background-color: cyan;
// font-size: 1em;
// padding: 0.25em 1em; //padding 0.25 emsize 1 em
// margin: 1em;
// border-radius: 3px;
// border: 2px solid palevioletred; //border หนา 2 px, เป็นแบบ solid, สี palevioletred
// `

  return (
    <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
      <h1 style={{justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: "60px", color:"saddlebrown"}}>ขอชื่อครับ</h1>
      <Input placeholder="Please enter your name" style={{ width: 300 }} onChange={handleChangeText}/>
      <br />
      <br />
      <Link href="/question">
        <ButtonContainer>
          <Button type="primary" style={{ width: 300 }} onClick={changeName}>Take the Exam</Button>
        </ButtonContainer>
      </Link>
    </div>
  )
}

export default EnterName
