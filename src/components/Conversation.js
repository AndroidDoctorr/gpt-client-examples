import { React, useState } from 'react'
import { ChatMessage, Role } from 'gpt-tools/dist/gpt-models'
import RequestInput from './RequestInput'

const Conversation = ({
  title,
  gptClient,
  placeholder,
  messageLimit,
  conversation,
}) => {
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState([...conversation])
  const [isLoading, setIsLoading] = useState(false)

  let limit = messageLimit || 5

  const continueConversation = () => {
    const requestMessage = new ChatMessage(prompt, Role.user)
    messages.push(requestMessage)
    setIsLoading(true)

    gptClient.continueConversation(messages).then((response) => {
      const responseMessage = new ChatMessage(response, Role.assistant)
      messages.push(responseMessage)
      setIsLoading(false)
      setPrompt('')
    })
  }

  return (
    <div className='section'>
      <h3>{title}</h3>
      {messages.map((m, i) => (
        <p key={'message' + i} className={m.role}>
          {m.content}
        </p>
      ))}
      {messages.length <= limit && (
        <RequestInput
          placeholder={placeholder}
          onSubmit={() => continueConversation()}
          onChange={(p) => setPrompt(p)}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}

export default Conversation
