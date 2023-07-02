import './styles/index.sass'
import GPTClient from 'gpt-tools'
import React from 'react'
import Collapsible from './components/Collapsible'
import Installation from './components/Installation'
import SingleChat from './components/SingleChat'
import Conversation from './components/Conversation'

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

      <SingleChat title='Single Chat' gptClient={client} />
      <Conversation title='Continue Conversation' gptClient={client} />
    </div>
  )
}

export default App
