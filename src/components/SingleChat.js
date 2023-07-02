import { React, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      doSingleCall()
    }
  }

  return (
    <div className='section'>
      <h3>{title}</h3>
      <input
        id='singleCallInput'
        type='text'
        placeholder={placeholder}
        onKeyDown={(e) => handleKeyPress(e)}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <input
        className={isLoading ? 'disabled' : ''}
        type='button'
        value={'GO'}
        onClick={() => doSingleCall()}
        disabled={isLoading}
      />
      {isLoading && <FaSpinner className='spinner' />}
      <hr></hr>
      <h4>Response:</h4>
      <p className='response' id='singleCallResponse'></p>
    </div>
  )
}

export default SingleChat
