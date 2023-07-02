import { React } from 'react'
const AgentInput = () => {
  // Role: Roman soldier in the late Republic era, serving in Gaul
  // Task: You are fishing at a river near your camp
  // Name: Quintus
  // Restrictions: You speak only Latin and some Greek
  return (
    <div className='agent'>
      <p>
        As a(n) <input type='text' placeholder='(Role)' />
        <input type='text' placeholder='(Task)' />
        <br />
        Your name is <input type='text' placeholder='(Name)' />.
        <br />
        Format your response as <input type='text' placeholder='(Format)' />
        <input type='text' placeholder='(Restrictions)' />
      </p>
    </div>
  )
}
export default AgentInput
