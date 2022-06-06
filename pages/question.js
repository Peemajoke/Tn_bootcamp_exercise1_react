import React from 'react'
import {questions} from '../public/questions'
import Header from '../components/Header'
import EnterName from '../components/EnterName'
import Link from 'next/link'
import { Button } from 'antd';

export default function question(props) {
  return (
    <div>
      <Header />
      <h1>yup</h1>
      <div>
      {questions.map((data,key) => {
          return(
              <div>
                  {data.id}
              </div>
          )
      })
      }
      </div>
      <Link href="/results">
      <Button type="primary" style={{ width: 200 }}>Test Button</Button>
      </Link>
    </div>
  )
}