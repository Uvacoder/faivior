import Styled from 'styled-components'
import { rgba } from 'polished'
import { maxQuery } from '../../helpers/media'

export default Styled.div`
margin: 1em;
padding: 1em 1.5em;
${maxQuery('md')} {
    padding: 0.5em;
}
max-width: 50rem;
div.top--bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 400;
    justify-content: space-between;
    margin-bottom: 1.2em;
}
div.contact--list {
    border: 1px solid #E6E8F1;
    border-radius: 5px;
    width: 100%;    
    padding: 1em;
    padding-right: 0.5em;
    background: #fff;
    div.container {
        height: 75vh;
        overflow-y: auto;
        ${({ theme }) => theme.scrollBaxMixin};
        padding: 1em;
        
        div.empty--list {
            margin-top: 2em;
            h3 {
                font-size: 1rem;
                margin-bottom: 0.5em;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        div.contact--list__item {
            padding: 1em 0px;
            padding-bottom: 1.5em;
            border-bottom: 1px solid #E6E8F1;
            &:not(:first-child) {
                padding-top: 1.5em;
            }
            div.contact--header {
                display: flex;
                justify-content: space-between;
            }
            h3 {
                font-size: 1rem;
                margin-bottom: 0.5em;
            }
            p {
                font-size: 0.9rem;
            }
            div.address--details {
                margin-top: 1em;
 
                div.address--item {
                    display: flex;
                    padding: 1em 0.8em;
                    justify-content: space-between;
                    border-radius: 4px;
                    border: 1px solid ${({ theme }) =>
                      rgba(theme.primary, 0.1)};
                    background: ${({ theme }) => rgba(theme.primary, 0.05)};
                    
                    button.delete--btn {
                        display: none;
                    }
                    &:hover {
                        background: ${({ theme }) => rgba(theme.primary, 0.07)};
                          button.delete--btn {
                        display: block;
                    }
                    }
                    :not(:last-child) {
                        margin-bottom: 1em;
                    }
                    p {
                        
                    cursor: pointer;
                    }
                    
                    div {
                        display: flex;
                        .icon {
                            display: block;
                            margin-right: 0.8em;
                        }
                    }
                }
            }
        }
    }
}
`
