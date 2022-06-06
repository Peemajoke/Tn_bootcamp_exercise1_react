import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Header() {

    const theName = useSelector((state) => state.name.value)

  return (
    <div style={{ width: '2000px', height: '60px', background: 'gray'}}>
      <div style={{margin: 'auto',  width: '100%', border: '3px solid green', padding: '10px', display: 'flex', flexDirection: 'row'}}>
        <div>Exam plus plus</div>
        <div style={{alignSelf: 'flex-end'}}>{theName}</div>
      </div>
    </div>
  )
}

export default Header
