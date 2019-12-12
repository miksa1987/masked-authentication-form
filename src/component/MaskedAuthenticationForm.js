import React from 'react'
import ComponentBase from './components/ComponentBase'
import Inputs from './components/Inputs'
import StyledButton from './components/StyledButton'

export default (props) => {
  const [aOne, setAOne] = React.useState('')
  const [aTwo, setATwo] = React.useState('')
  const [aThree, setAThree] = React.useState('')

  const [bOne, setBOne] = React.useState('')
  const [bTwo, setBTwo] = React.useState('')
  const [bThree, setBThree] = React.useState('')

  const code = `${aOne}${aTwo}${aThree}-${bOne}${bTwo}${bThree}`

  const aSetters = [setAOne, setATwo, setAThree] 
  const bSetters = [setBOne, setBTwo, setBThree] 

  const submit = (event) => {
    event.preventDefault()
    props.onSubmit(code)
  }
  
  return (
    <ComponentBase rounded={props.rounded} onSubmit={submit}>
      <strong>Please enter your verification code.</strong>
      <p>Open up your authenticator app to view your verification code.</p>
      
      <Inputs 
        aSetters={aSetters} 
        bSetters={bSetters} 
        regex={props.regex} 
        rounded={props.rounded} 
      />
      
      <p>Or, try another way to log in.</p>
      
      <StyledButton id='submit-button' rounded={props.rounded} type='submit'>
        Sign in to your account
      </StyledButton>
    </ComponentBase>
  )
}