import { css } from 'styled-components'

const ScrollBar = css`
  ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
    overflow: visible;
  }
  ::-webkit-scrollbar {
    height: 16px;
    overflow: visible;
    width: 16px;
  }
  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }
  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    min-height: 28px;
    padding-top: 100px;
    background-clip: padding-box;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%),
      inset 0 -1px 0 rgb(0 0 0 / 7%);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    background-clip: padding-box;
    border: solid transparent;
    border-width: 1px 1px 1px 6px;
    min-height: 28px;
    padding: 100px 0 0;
    box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%);
  }
  ::-webkit-scrollbar-track {
    background-clip: padding-box;
    border: solid transparent;
    width: 16px;
    border-width: 0 0 0 4px;
  }
  ::-webkit-scrollbar-track {
    background-clip: padding-box;
    border: solid transparent;
    border-width: 0 0 0 4px;
  }
`
export default ScrollBar
