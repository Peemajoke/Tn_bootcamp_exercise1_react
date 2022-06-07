import React, { useMemo, useState ,useCallback } from 'react'
import {questions} from '../public/questions'
import Header from '../components/Header'
import EnterName from '../components/EnterName'
import Link from 'next/link'
import { Button, Radio, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux'

let guess=[0,0,0,0,0]
  console.log(guess)

export default function question(props) {
  console.log("guess")
  console.log(guess)
  // let nowAt=0
  const [nowAt, setNowAt] = useState(0);
  console.log("nowAt")
  console.log(nowAt)

  const answersGen = () => {
    let ans=[]
    questions.forEach(item => {
      ans.push(item.answerId)
      console.log(item.answerId)
    })
    return ans
  }

  const ans = useMemo(answersGen, [questions])
  // console.log(ans)

  const questionGen = () => {
    let ques=[]
    questions.forEach(item => {
      ques.push(item.name)
    })
    return ques
  }

  const quest = useMemo(questionGen, [questions])
  // console.log(quest)

  const choicesGen = () => {
    let choices=[]
    questions.forEach(item => {
      choices.push(item.choice)
    })
    return choices
  }

  const choices = useMemo(choicesGen, [questions])
  console.log(choices)

  const showChoices = () => {
    let allChoices = []
    console.log(questions[0].choice)
    // questions[nowAt].choice.map((item, index) =>{

    // })
    questions[nowAt].choice.forEach(item => {
      // console.log(item.text)
      allChoices.push(<Radio value={item.id}>{item.text}</Radio>)
    })
    return allChoices
  }

const [answerValue, setAnswerValue] = useState(0);

const onChangeRadio = (e) => {
  // console.log('radio checked', e.target.value);
  setAnswerValue(e.target.value);
  guess[nowAt]=e.target.value;
};

const swapQuestionUp = () => {
  if(nowAt<quest.length-1){
    setAnswerValue(guess[nowAt+1])
    console.log("inside nowAt")
    console.log(nowAt)
    setNowAt(nowAt+1)
  }
}

const swapQuestionDown = () => {
  if(nowAt>0){
    setAnswerValue(guess[nowAt-1])
    setNowAt(nowAt-1)
  }
}

//redux time yay!!
const dispatch = useDispatch()
const sentResults = useCallback((temp) => dispatch(temp))

const computeResult = () => {
  const quesNum = quest.length
  let coorNum = 0
  for (let i=0; i<quesNum; i++){
    if(guess[i] === ans[i]) coorNum+=1;
  }
  const percentCoor = (coorNum*100)/quesNum
  const isPass = (percentCoor >= 80) ? true:false;
  console.log(coorNum)
  console.log(percentCoor)
  console.log(isPass)
  const temp = {
    type: 'resultMode',
    numQues: quesNum,
    numCoor: coorNum,
    isPass: isPass
  }
  sentResults(temp)
  guess=[0,0,0,0,0]
}

  return (
    <div>
      <Header />
      <h1>Question {nowAt+1}</h1>
      <h3>{quest[nowAt]}</h3>
      <div>

      <Radio.Group onChange={onChangeRadio} value={answerValue}>
      <Space direction="vertical">
      {/* {questions.map((data,key) => {
        // console.log("the choices")
        // console.log(typeof(key))
          return(
              // <div key={key}>
              //     {data.id}
              // </div>
              <Radio value={key+1}>{data.id}</Radio>
          )
      })
      } */}
      {showChoices()}
      </Space>
      </Radio.Group>
      </div>
      <br />
      <Button type="primary" style={{ width: 200 }} onClick={swapQuestionDown}>Previous</Button>
      <Button type="primary" style={{ width: 200 }} onClick={swapQuestionUp}>Next</Button>
      <br />
      <Link href="/results">
      <Button type="primary" style={{ width: 200 }} onClick={computeResult}>Submit Answers</Button>
      </Link>
    </div>
  )
}