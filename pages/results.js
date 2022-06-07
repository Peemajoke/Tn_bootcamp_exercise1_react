import React, { useCallback, useState } from 'react'
import Header from '../components/Header'
import Result from '../components/Results'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { Button } from 'antd';

export default function Results() {

    function resetName(){
        const temp = {
          type: 'nameMode',
          value: ''
        }
        return temp
      }
    
      const dispatch = useDispatch()
      const changeNameToDefault = useCallback(() => dispatch(resetName())) //don't add [dispatch] cuz it will not update variable playerName
  return (
    <div style={{background: 'beige', height: '100vh'}}>
      <Header />
      <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
      <Result />
      <Link href="/">
      <Button type="primary" style={{ width: "100%" }} onClick={changeNameToDefault}>To Home Page</Button>
      </Link>
      </div>
    </div>  
  )
}
