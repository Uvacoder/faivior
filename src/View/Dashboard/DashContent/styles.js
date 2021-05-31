import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
margin: 0px 2.5em;
height: calc(100% - 2em);
margin-top: 2em;
${maxQuery('<md')} {
    margin: 0px 1em;
    margin-top: 2em;
}

/* padding: 1em 1.5em; */
div.top--bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2em;
    h3 {
        font-weight: 400;
    }
}
div.settings--container {
    background: #fff;
    height: 80vh;
    background: #FFFFFF;
    overflow: hidden;
    /* border: 1px solid #E6E8F1; */
    border-radius: 5px;
    header {
        padding: 1em;
        border-bottom: 1px solid #E6E8F1;
        display: flex;
        align-items: center;
        a {
            text-decoration: none;
            position: relative;
            color: ${({ theme }) => theme.txtColor};
           min-width: 8rem;
           margin-right: 2em;
           text-align: center;
           user-select: none;
           display: block;
           font-weight: 400;
            &.selected {
                font-weight: 600;
                &:after {
                    content: "";
                    position: absolute;
                    width: 40%;
                    left: 50%;
                    transform: translateX(-50%);
                    display: inline-block;
                    background: ${({ theme }) => theme.secondary};
                    height: 0.2rem;
                    border-radius: 5px;
                    bottom: -1.1em;
                }
            }
        }
    }
    div.content--container {
        padding: 1em;
        ${minQuery('md')} {
        padding: 2em 1.5em;
        }
        height: 100%;
        overflow-y: auto;
    }
}
`
