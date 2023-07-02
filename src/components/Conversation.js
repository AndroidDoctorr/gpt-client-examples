import { ChatMessage, Role } from 'gpt-tools/dist/gpt-models'
import { React, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

const startMessages = [new ChatMessage('Knock knock!', Role.assistant)]

const Conversation = ({ title, gptClient, placeholder }) => {
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState(startMessages)
  const [isLoading, setIsLoading] = useState(false)

  const continueConversation = () => {
    setIsLoading(true)
    gptClient.singlePrompt(prompt).then((response) => {
      document.getElementById('singleCallResponse').innerHTML = response
      setIsLoading(false)
    })
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      continueConversation()
    }
  }

  return (
    <div className='section'>
      <h3>{title}</h3>
      <p className='response' id='singleCallResponse'>
        {messages[0].content}
      </p>
      <span>
        <input
          type='text'
          placeholder={placeholder}
          onKeyDown={(e) => handleKeyPress(e)}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <input
          className={isLoading ? 'disabled' : ''}
          type='button'
          value={'GO'}
          onClick={() => continueConversation()}
          disabled={isLoading}
        />
        {isLoading && <FaSpinner className='spinner' />}
      </span>
      <hr></hr>
      <h4>Response:</h4>
      <p className='response' id='singleCallResponse'></p>
    </div>
  )
}

export default Conversation
