import React from 'react'
import { Badge, Button } from 'reactstrap'

export default function R035ReactstrapBadges() {
  return (
    <div>
      <h1>
        {' '}
        새로운 서베이 <Badge color="secondary">New</Badge>
      </h1>
      <Button color="light" outline>
        확인{' '}
        <Badge pill color="dark">
          3
        </Badge>
      </Button>
      <Badge href="https://naver.com" color="success">
        NAVER
      </Badge>
    </div>
  )
}
