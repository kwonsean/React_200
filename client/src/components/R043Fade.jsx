import React, { useEffect, useState } from 'react'
import { Button, Fade } from 'reactstrap'

export default function R043Fade() {
  const [fadeInOut, setFadeInOut] = useState(true)

  return (
    <div>
      <Button color="dark" onClick={() => setFadeInOut((cur) => !cur)}>
        내일 만날 장소는??
      </Button>
      <Fade in={fadeInOut} tag="h3" style={{ marginTop: 10 }}>
        작전역!
      </Fade>
    </div>
  )
}
