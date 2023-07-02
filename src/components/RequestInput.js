import { React, useRef } from 'react'
import { FaSpinner } from 'react-icons/fa'

const RequestInput = ({ onSubmit, onChange, placeholder, isLoading }) => {
  const textInput = useRef()
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      submitPrompt()
    }
  }
  const submitPrompt = () => {
    onSubmit()
    textInput.current.value = ''
  }

  return (
    <>
      <input
        type='text'
        ref={textInput}
        placeholder={placeholder}
        onKeyDown={(e) => handleKeyPress(e)}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        className={isLoading ? 'disabled' : ''}
        type='button'
        value={'GO'}
        onClick={() => submitPrompt()}
        disabled={isLoading}
      />
      {isLoading && <FaSpinner className='spinner' />}
    </>
  )
}

export default RequestInput
