import { React, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

const samplePrompt = 'Tell me a joke'

const SingleChat = ({ gptClient }) => {
  const [prompt, setPrompt] = useState(samplePrompt)
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
      <h3>Single Call</h3>
      <input
        id='singleCallInput'
        type='text'
        placeholder={samplePrompt}
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
