import styled from 'styled-components'

export default styled.div`
  border-radius: ${props => props.rounded ? '7px' : '0px'};
  border: 1px solid #cacadd;
  background-color: white;
  color: black;
  margin: 5px;
  padding: 10px;
  font-size: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`