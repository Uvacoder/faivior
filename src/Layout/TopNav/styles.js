import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
    background: #FFFFFF;
    position: fixed;
    z-index: 999;
    top: 0px;
    left: 0px;
    width: 100vw;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 2em;
    ${maxQuery('md')} {
        padding:  0px 1.2em;
    }
    
    height: ${({ theme }) => theme.navHeight};
        img.logo--img {
            width: 7.5rem;
        }
        img.profile--img {
            width: 2rem;
        }
    div.col--1 {
        display: flex;
        align-items: center;
        .icon {
            margin-right: 1em;
            font-size: 1.3rem;
            color: #273240;
        }
    }
    div.col--2 {
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        button {
            font-size: 0.9rem;
            padding-left: 0.9em;
            color:  #555555;    
              ${maxQuery('md')} {
                padding-right: 0.5em;
            }        
        }
        position: relative;
        img {
            cursor: pointer;
        }
    }

`
