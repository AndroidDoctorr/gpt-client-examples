import React from 'react'

const Installation = () => {
  return (
    <div>
      <h3>Getting Started</h3>
      <h4>Account Setup</h4>
      <p>
        To obtain an <code>API KEY</code>, create an account at{' '}
        <a href='https://platform.openai.com/signup'>OpenAI.com</a>
      </p>
      <p>
        Create your key in the{' '}
        <a href='https://platform.openai.com/account/api-keys'>API Keys</a>{' '}
        section
      </p>
      <p>
        <strong>
          MAKE SURE TO COPY YOUR KEY as you won't get another chance to look at
          it!
        </strong>
      </p>
      <p>Put your key in the .env file(s) of your project, like so:</p>
      <div className='codeSample'>
        <code>{'REACT_APP_API_TOKEN=[API KEY]'}</code>
      </div>
      <h4>Installation</h4>
      <p>Install this tool with npm or yarn</p>
      <div className='codeSample'>
        <code>{'npm install gpt-tools'}</code>
      </div>
      <br />
      <div className='codeSample'>
        <code>{'yarn add gpt-tools'}</code>
      </div>
      <h4>Usage</h4>
      <p>Import the client class into your project and create an instance</p>
      <div className='codeSample'>
        <code>{"import GPTClient from 'gpt-tools'"}</code>
        <br />
        <code>{'...'}</code>
        <br />
        <code>{'const client = new GPTClient()'}</code>
      </div>
    </div>
  )
}

export default Installation
