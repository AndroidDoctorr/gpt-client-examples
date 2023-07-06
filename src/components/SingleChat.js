import { React, useState } from 'react'
import RequestInput from './RequestInput'

const SingleChat = ({ title, gptClient, placeholder, model, temperature }) => {
  const [prompt, setPrompt] = useState(placeholder)
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const doSingleCall = () => {
    setIsLoading(true)
    gptClient.singlePrompt(prompt, model, temperature).then((response) => {
      setResponse(response)
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
      <p className='assistant'>{response}</p>
    </div>
  )
}

export default SingleChat
