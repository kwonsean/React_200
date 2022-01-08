import React, { useState } from 'react'
import Contextchild from './Contextchild'

const { Provider, Consumer } = React.createContext()
export { Consumer }
export default function R076Context() {
  const [title, setTitle] = useState('title')
  const content = {
    title,
    setTitle,
    msg: 'this is from Providr Content',
  }
  return (
    <Provider value={content}>
      <h1>{title}</h1>
      <Contextchild />
    </Provider>
  )
}
