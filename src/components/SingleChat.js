import { React, useState } from 'react'
import RequestInput from './RequestInput'

const SingleChat = ({ title, gptClient, placeholder }) => {
  const [prompt, setPrompt] = useState(placeholder)
  const [isLoading, setIsLoading] = useState(false)

  const doSingleCall = () => {
    setIsLoading(true)
    gptClient.singlePrompt(prompt).then((response) => {
      document.getElementById('singleCallResponse').innerHTML = response
      setIsLoading(false)
    })
  }

  return (
    <div className='section'>
      <h3>{title}</h3>
      <RequestInput
        placeholder={placeholder}
        onSubmit={() => doSingleCall()}
        onChange={(p) => setPrompt(p)}
        isLoading={isLoading}
      />
      <hr></hr>
      <h4>Response:</h4>
      <p className='assistant' id='singleCallResponse'></p>
    </div>
  )
}

export default SingleChat
