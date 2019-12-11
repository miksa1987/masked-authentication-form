import React from 'react'
import MaskedAuthenticationForm from './component/MaskedAuthenticationForm'

const App = () => {
  return (
    <div>
      <MaskedAuthenticationForm rounded regex='[0-9]' />
    </div>
  )
}

export default App
