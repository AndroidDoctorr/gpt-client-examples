import './App.css'
import GPTClient from 'gpt-tools'
import React, { useEffect } from 'react'

const client = new GPTClient()
const samplePrompt = 'Tell me a joke'

function App() {
  useEffect(() => {
    client.defaultTemperature = 0.5

    doSampleCalls()
  }, [])

  return (
    <div className='App'>
      <div className='exampleSection'>
        <input id='singleCallInput' type='text' placeholder={samplePrompt} />
        <p id='singleCallResponse' className='responseText'></p>
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
  client
    .singlePrompt(samplePrompt)
    .then(response => {
      document.getElementById('singleCallResponse').innerHTML = response
      console.log(response)
    })
}

export default App
