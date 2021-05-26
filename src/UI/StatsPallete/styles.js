import Styled from 'styled-components'
import { rgba } from 'polished'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
${minQuery('md')} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
column-gap: 2em;
margin-top: 1.5em;
margin-bottom: 2em;
div.stats--item {    
    height: 6rem;
    display: flex;
    color: ${({ theme }) => theme.primary};
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5em 1.5em;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => rgba(theme.primary, 0.15)};
    background: #f2eff4;
    /* background: ${({ theme }) => rgba(theme.primary, 0.15)}; */
    ${maxQuery('md')} {
        margin-bottom: 1.2em;
    }
    h1 {
        font-size: 1.5rem;
    }
    h3 {
        font-size: 0.9rem;
        margin-bottom: 0.8em;
    }
    div:first-child {
        display: flex;
        flex-direction: column;
    }
    div:last-child {
        .icon {
            font-size: 2.5rem;
            display: block;
        }
    }
}

`
