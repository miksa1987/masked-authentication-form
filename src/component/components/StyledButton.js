import styled from 'styled-components'

export default styled.button`
  padding: 8px;
  color: white;
  width: 100%;
  background-image: linear-gradient(#6688ff, #0033aa);
  border: 1px solid #001166;
  border-radius: ${props => props.rounded ? '7px' : '0px'};
`