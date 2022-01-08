import { Alert, UncontrolledAlert } from 'reactstrap'
import React from 'react'

export default function R034_ReactstrapAlerts() {
  return (
    <div>
      <Alert color="light">Simple Alert [color: ligth]</Alert>
      <UncontrolledAlert color="warning">
        Uncontrolled Alert [color:warning]
      </UncontrolledAlert>
    </div>
  )
}
