import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export default styled.button`
  &:disabled {
    cursor: no-drop;
  }
  cursor: pointer;
  outline: none;
  ${(props) => css`
    padding: ${props.small ? '0.5em 0.8em' : '0.9em 1.8em'} ;
    user-select: none;
    font-size: ${props.small ? '0.8rem' : '0.9rem'};
    font-weight: 500;
    width: ${props.full ? '100%' : 'fit-content'};
    display: ${props.full ? 'block' : 'inline-block'};
    border-radius: ${props.rounded ? '100px' : '5px'};
    ${
      props.primary &&
      css`
        border: 2px solid ${props.theme.primary};
        background-color: ${({ theme }) => theme.primary};
        color: #fff;
        &:hover,
        &:focus {
          background: ${({ theme }) => rgba(theme.primary, 0.9)};
          /* border-color: ${({ theme }) => rgba(theme.primary, 0.9)}; */
          border: 2px solid ${({ theme }) => rgba(theme.primary, 0.9)};
          color: #fff;
          outline: none;
        }
        &:disabled {
          background: ${({ theme }) => rgba(theme.primary, 0.6)};
          border: 2px solid ${({ theme }) => rgba(theme.primary, 0.2)};
          color: #fff !important;
        }
      `
    }
    ${
      props.secondary &&
      css`
        border: 2px solid ${props.theme.secondary};
        background: ${({ theme }) => theme.secondary};
        color: #fff;
        &:hover,
        &:focus {
          background: ${({ theme }) => rgba(theme.secondary, 0.8)};
          border-color: ${({ theme }) => rgba(theme.secondary, 0.8)};
          color: white;
        }
        &:disabled {
          background: transparent !important;
          color: ${props.theme.disabled}!important;
          /* border-color: ${props.theme.disabled}!important; */
        }
      `
    }
    ${
      props.tertiary &&
      css`
        background-color: transparent;
        border-color: transparent;
        color: ${({ theme }) => theme.primary};
        font-weight: bold;
        &:hover,
        &:focus {
          color: ${({ theme }) => theme.primary};
          background: transparent;
          border-color: transparent;
        }
      `
    }
    ${
      props.icon &&
      css`
        border: none;
        border-color: none;
        padding: 0px;
        background-color: transparent;
        color: ${({ theme }) => theme.primary};
        .icon {
          font-size: 1.2em;
        }
        &:hover,
        &:focus {
          background: none;
          border: none;
          border-color: none;
          color: ${({ theme }) => theme.primary};
          outline: none;
        }
        &:disabled {
          background: none;
          border: none;
          border-color: none;
          color: ${({ theme }) => rgba(theme.primary, 0.6)}!important;
        }
      `
    }

    /* iconRight */
    ${
      props.iconRight &&
      css`
        display: flex;
        align-items: center;
        .icon {
          margin-right: 0.3em;
          font-size: 1.2em;
        }
      `
    }

  /* IconLeft */
    ${
      props.iconLeft &&
      css`
        display: flex;
        align-items: center;
        .icon {
          margin-left: 0.3em;
          font-size: 1.2em;
        }
      `
    }

    `}
  &.btn--deactivate {
    background: #ff5e5e;
    border-color: #ff5e5e;
    color: #ffff;
    .icon {
      color: #ff5e5e;
    }
    &:hover {
      background: ${rgba('#ff5e5e', 0.9)};
      border-color: ${rgba('#ff5e5e', 0.9)};
    }
  }
  &.btn--activate {
    background: #28a745;
    border-color: #28a745;
    color: #ffff;
    .icon {
      color: #28a745;
    }
    &:hover {
      background: ${rgba('#28a745', 0.9)};
      border-color: ${rgba('#28a745', 0.9)};
    }
  }
  &.loading--btn {
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) =>
      props.spinnerWithTxt
        ? css`
            .spinner {
              margin-right: 0.5em;
              border: 3.5px solid #f3f3f3;
              border-top: 3.5px solid ${({ theme }) => theme.primary};
            }
          `
        : ''}
  }
`
