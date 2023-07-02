import './styles/index.sass'
import GPTClient from 'gpt-tools'
import React from 'react'
import Collapsible from './components/Collapsible'
import Installation from './components/Installation'
import SingleChat from './components/SingleChat'

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

      <SingleChat gptClient={client} />

      <div className='section'>
        <h3>Continue Conversation</h3>
        <input id='singleCallInput' type='text' placeholder={'fffdfd'} />
        <input type='submit' value={'GO'} />
        <hr></hr>
        <h4>Response:</h4>
        <p className='response' id='singleCallResponse'></p>
      </div>
    </div>
  )
}

export default App
