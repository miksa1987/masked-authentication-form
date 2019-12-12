import React from 'react'
import MaskedAuthenticationForm from './component/MaskedAuthenticationForm'

const App = () => {
  const onSubmit = (code) => console.log(code)

  return (
    <div>
      <MaskedAuthenticationForm rounded regex='[0-9]' onSubmit={onSubmit} />
    </div>
  )
}

export default App
