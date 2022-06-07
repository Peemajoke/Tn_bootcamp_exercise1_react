import React from 'react'
import questions from '../public/questions'
import Header from '../components/Header'
import EnterName from '../components/EnterName'

export default function Home() {
  return (
    <div style={{background: 'beige', height: '100vh'}}>
      <Header />
      <div>
        <EnterName />
      </div>
    </div>  
  )
}
