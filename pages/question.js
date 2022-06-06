import React from 'react'
import {questions} from '../public/questions'

export default function question(props) {
  return (
    <div>
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
    </div>
  )
}