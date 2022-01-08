import React from 'react'

export default function R023_PropsNode(props) {
  console.log(props)
  return <div>{props.children}</div>
}

// 같은 결과
// export default function R023_PropsNode({ children }) {
//   return <div>{children}</div>
// }
