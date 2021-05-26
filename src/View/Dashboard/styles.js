import Styled, { keyframes } from 'styled-components'
import { rem } from 'polished'
import { minQuery, maxQuery } from '../../helpers'

const slideIn = (width1, width2) => keyframes`
from {
    width: ${width1};
}
to {
    width: ${width2};
}`

const move = (width1, width2) => keyframes`
from {
    left: ${width1};
}
to {
    left: ${width2};
}`

export default Styled.div`
div.app--content__container {
    display: flex;
    flex: 1;
    aside.app--aside__container {
        ${minQuery('953px')} {
          width: ${({ theme }) => rem(theme.sideNavWidth)};
        }
          &.show--nav {
            ${minQuery('953px')} {
              animation: ${({ theme }) =>
                slideIn(0, rem(theme.sideNavWidth))} 0.5s;
              animation-fill-mode: forwards;
            }
              div.dashboard--side__nav {
                      animation: ${({ theme }) =>
                        move(`-${rem(theme.sideNavWidth)}`, 0)} 0.5s;
                        -webkit-animation-fill-mode: forwards;
                      animation-fill-mode: forwards;
              }
          }
          &.hide--nav {
              ${minQuery('953px')} {
                animation: ${({ theme }) =>
                  slideIn(rem(theme.sideNavWidth), 0)} 0.5s;
                animation-fill-mode: forwards;
              }
                  div.dashboard--side__nav {
              animation: ${({ theme }) =>
                move(0, `-${rem(theme.sideNavWidth)}`)} 0.5s;
                -webkit-animation-fill-mode: forwards;
                  animation-fill-mode: forwards;
                  
                  }
          }
    }
    main.app--main__container {
        padding-top: ${({ theme }) => theme.navHeight};
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        ${maxQuery('953px')} {
        padding-bottom: 1em;
        }
        ${minQuery('953px')} {
            width: ${({ theme }) => `calc(100vw - ${rem(theme.sideNavWidth)})`};
            &.show--nav {
                animation: ${({ theme }) =>
                  slideIn(
                    '100vw',
                    `calc(100vw - ${rem(theme.sideNavWidth)})`,
                  )} 0.5s;
                animation-fill-mode: forwards;
            }
            &.hide--nav {
                animation: ${({ theme }) =>
                  slideIn(
                    `calc(100vw - ${rem(theme.sideNavWidth)})`,
                    '100vw',
                  )} 0.5s;
                animation-fill-mode: forwards;
            }
        }

        div.notFound--page {
          width: 100%;
          height: 100%;
        }
    }
}
`
