import React, { useState, useRef, useEffect } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import './collapsible.sass'

const Collapsible = ({ title, content, startCollapsed }) => {
  const [isOpen, setIsOpen] = useState(!startCollapsed)
  const contentRef = useRef(null)

  useEffect(() => {
    setIsOpen(!startCollapsed)
  }, [startCollapsed])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const getContentHeight = () => {
    if (contentRef.current) {
      return isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
    }
    return 'auto'
  }

  return (
    <div className='collapsible'>
      <button className='toggle-button' onClick={handleToggle}>
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
        <h3 className='title'>{title}</h3>
      </button>
      <div
        className='content'
        ref={contentRef}
        style={{ height: !isOpen ? 0 : getContentHeight() }}
      >
        <div className='inner-content'>{content}</div>
      </div>
    </div>
  )
}

export default Collapsible
