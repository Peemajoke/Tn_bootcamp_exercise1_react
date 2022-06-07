import React, { useMemo, useState ,useCallback } from 'react'
import Header from '../components/Header'
import QuestionPanel from '../components/QuestionPanel'

export default function question(props) {

  return (
    <div style={{background: 'beige', height: '100vh'}}>
      <Header />
      <QuestionPanel />
    </div>
  )
}