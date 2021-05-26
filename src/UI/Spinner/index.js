import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export default styled.div.attrs({
  className: 'spinner',
})`
  display: inline-block;
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  animation: ${spin} 1.2s linear infinite;
`
