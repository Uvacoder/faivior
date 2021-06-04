import { css } from 'styled-components'

const ScrollBar = css`
  & {
    scrollbar-width: thin;
    scrollbar-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 80%;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 40px;
    background: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #c4c4c4;
      border-radius: 40px;
    }
  }
`

export default ScrollBar
