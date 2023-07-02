import { React } from 'react'
const AgentInput = () => {
  return (
    <div className='agent'>
      <p>
        As a(n) <input type='text' placeholder='(Role)' />
        <input type='text' placeholder='(Task)' />
        <br />
        Your name is <input type='text' placeholder='(Name)' />.
        <input type='text' placeholder='(Rrestrictions)' />
      </p>
    </div>
  )
}
export default AgentInput
