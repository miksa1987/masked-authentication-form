import styled from 'styled-components'

export default styled.button`
  padding: 8px;
  color: white;
  width: 100%;
  background-image: linear-gradient(#66bbff, #0077aa);
  border: 1px solid #002c66;
  border-radius: ${props => props.rounded ? '7px' : '0px'};
`