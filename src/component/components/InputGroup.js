import React from 'react'
import styled from 'styled-components'
import Input from './StyledInput'
import useField from '../hooks/useField'

const InputGroupBase = styled.div`
  display: flex;
  flex-direction: row;
`

export default (props) => {
  const [setWatcherOne, setWatcherTwo, setWatcherThree] = props.setters

  const [one] = useField('text', setWatcherOne, props.regex)
  const [two] = useField('text', setWatcherTwo, props.regex)
  const [three] = useField('text', setWatcherThree, props.regex)

  return (
    <InputGroupBase>
      <Input {...one} />
      <Input {...two} />
      <Input {...three} />
    </InputGroupBase>
  )
}