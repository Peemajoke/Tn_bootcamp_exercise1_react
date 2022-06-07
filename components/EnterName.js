import React, { useCallback, useState } from 'react'
import { Input, Button } from 'antd';
import styled from 'styled-components'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

function EnterName() {
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

  return (
    <div>
      {/* <h1>Please Enter your name</h1> */}
      <Input placeholder="Please enter your name" style={{ width: 200 }} onChange={handleChangeText}/>
      <br />
      <br />
      <Link href="/question">
        <Button type="primary" style={{ width: 200 }} onClick={changeName}>Take the Exam</Button>
      </Link>
    </div>
  )
}

export default EnterName
