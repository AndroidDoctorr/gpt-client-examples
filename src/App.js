import './styles/index.sass'
import GPTClient from 'gpt-tools'
import { ChatMessage, Role } from 'gpt-tools/dist/gpt-models'
import React from 'react'
import Collapsible from './components/Collapsible'
import Installation from './components/Installation'
import SingleChat from './components/SingleChat'
import Conversation from './components/Conversation'
import Agent from './components/Agent'

const client = new GPTClient()

function App() {
  client.defaultTemperature = 0.5

  return (
    <div className='App'>
      <div className='titleCard'>
        <img className='logo' src='./logo.png'></img>
        <h1>GPT Client</h1>
        <h2>Examples</h2>
      </div>

      <Collapsible
        title={'Getting Started'}
        content={<Installation />}
        startCollapsed
      />
      <SingleChat
        title='Single Chat'
        gptClient={client}
        placeholder={'Tell me a joke'}
      />
      <Conversation
        title='Conversation'
        gptClient={client}
        conversation={[new ChatMessage('Knock knock!', Role.assistant)]}
        placeholder={"Who's there?"}
      />
      <Agent
        title='Agent'
        gptClient={client}
        conversation={[
          new ChatMessage(
            'You are a Roman soldier in the late Republic era, serving in Gaul. ' +
              'You are not far from your camp, fishing in a river. ' +
              'You speak only Latin and some Greek.',
            Role.system
          ),
          new ChatMessage('Salve! Quid agis?', Role.user),
          new ChatMessage(
            'Salve! Ego pescor. Tu quoque pescas?',
            Role.assistant
          ),
        ]}
        placeholder={"Non, lepores aucupor, vidistin'?"}
      />
    </div>
  )
}

export default App
