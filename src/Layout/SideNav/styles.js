import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    width: ${({ theme }) => rem(theme.sideNavWidth)};
    position: fixed;
    border-right: 1px solid #E5E5E5;
    height: 100%;
    z-index: 999;
    background: #273240;
    header {
        display: flex;
        align-items: center;
        padding: 2em 2em;
        padding-top: 1.5em;
        user-select: none;
        button {
            margin-right: 1.5em;
            .icon {
                color: #fff;
                font-size: 1.3rem;
            }
        }
        h2 {
            color: #fff;
        }
    }
    nav {
        user-select: none;
        ol {
            padding: 0px;
            list-style: none;
            padding: 0px 1em;
        a {
            display: block;
            margin-bottom: 0.5em;
            padding: 0.7em 0.5em;
            border-radius: 1px;
            text-decoration: none;
            display: flex;
            align-items: center;
            font-weight: 600;
            color: #ffff;;
            border-radius: 6px;
            &:hover {
                color: ${({ theme }) => theme.secondary};
            }
            .icon {
                width: 2em;
                font-size: 1rem;
                margin-right: 0.5em;
            }
            &.active {
                color: ${({ theme }) => theme.secondary};
            }
        }
        }
    }
`
