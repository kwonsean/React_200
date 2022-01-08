import { Button } from 'reactstrap'
import React from 'react'
import { Consumer } from './R076Context'

export default function Contextchild2() {
  const clickBtn = (contextValue) => {
    console.log(contextValue)
    const { title, setTitle } = contextValue
    console.log(setTitle)
    if (title === 'title') {
      setTitle('NewTitle!!!')
    } else {
      setTitle('title')
    }
  }
  return (
    <div>
      <Consumer>
        {(contextValue) => (
          <>
            <Button onClick={() => clickBtn(contextValue)}>button</Button>
            <br />
            <span>{contextValue.msg}</span>
          </>
        )}
      </Consumer>
    </div>
  )
}
