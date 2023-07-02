import './styles/index.sass'
import GPTClient from 'gpt-tools'
import React, { useEffect } from 'react'
import Collapsible from './components/Collapsible'
import Installation from './components/Installation'

const client = new GPTClient()
const samplePrompt = 'Tell me a joke'

function App() {
  useEffect(() => {
    client.defaultTemperature = 0.5

    doSampleCalls()
  }, [])

  return (
    <div className='App'>
      <div className='titleCard'>
        <img className='logo' src='./logo.png'></img>
        <h1>GPT Tools</h1>
        <h2>Examples</h2>
      </div>

      <Collapsible
        title={'Getting Started'}
        content={<Installation />}
        startCollapsed
      />

      <div className='section'>
        <h3>Single Call</h3>
        <input id='singleCallInput' type='text' placeholder={samplePrompt} />
        <input type='submit' value={'GO'} />
        <hr></hr>
        <h4>Response:</h4>
        <p className='response' id='singleCallResponse'></p>
      </div>

      <div className='section'>
        <h3>Continue Conversation</h3>
        <input id='singleCallInput' type='text' placeholder={samplePrompt} />
        <input type='submit' value={'GO'} />
        <hr></hr>
        <h4>Response:</h4>
        <p className='response' id='singleCallResponse'></p>
      </div>
    </div>
  )
}

function doSampleCalls() {
  doSingleCall()

  // Create an agent

  // Continue conversation with agent (3x)

  // Build a dataset?

  // Return an npm script call?
}
function doSingleCall() {
  client.singlePrompt(samplePrompt).then((response) => {
    document.getElementById('singleCallResponse').innerHTML = response
    console.log(response)
  })
}

export default App
