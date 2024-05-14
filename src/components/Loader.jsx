import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className="lds-ellipsis"><div></div><div></div><div></div></div>
    </Html>
  )
}

export default Loader