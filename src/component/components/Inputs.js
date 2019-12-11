import styled from 'styled-components'
import React from 'react'
import InputGroup from './InputGroup'

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Separator = styled.p`
  font-size: 150%;
  margin: 10px;
  color: lightgrey;
`

export default (props) => {
  return (
    <CenteredDiv>
      <InputGroup setters={props.aSetters} regex={props.regex} />
      <Separator>-</Separator>
      <InputGroup setters={props.bSetters} regex={props.regex} />
    </CenteredDiv>
  )
}