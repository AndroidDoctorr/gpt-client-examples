import { ChatMessage, Role } from 'gpt-tools/dist/gpt-models'
import { React, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

const startMessages = [new ChatMessage('Knock knock!', Role.assistant)]

const Conversation = ({ title, gptClient, placeholder, messageLimit }) => {
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState(startMessages)
  const [isLoading, setIsLoading] = useState(false)

  let limit = messageLimit || 5

  const continueConversation = () => {
    setIsLoading(true)
    gptClient.singlePrompt(prompt).then((response) => {
      const responseMessage = new ChatMessage(response, Role.assistant)
      messages.push(responseMessage)
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
      {messages.length <= limit && (
        <>
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
        </>
      )}
    </div>
  )
}

export default Conversation
