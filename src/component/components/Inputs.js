import styled from 'styled-components'
import React from 'react'
import InputGroup from './InputGroup'

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Separator = styled.p`
  font-size: 150%;
  padding: 5px;
  color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default (props) => {
  return (
    <CenteredDiv>
      <InputGroup setters={props.aSetters} regex={props.regex} rounded={props.rounded} />
      <Separator>-</Separator>
      <InputGroup setters={props.bSetters} regex={props.regex} rounded={props.rounded}/>
    </CenteredDiv>
  )
}