import styled from 'styled-components'

export default styled.input`
  padding: 5px;
  margin: 2px;
  border: 1px solid #dadada;
  border-radius: ${props => props.rounded ? '7px' : '0px'};
  width: 1.5rem;
  height: 3rem;
  font-size: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`