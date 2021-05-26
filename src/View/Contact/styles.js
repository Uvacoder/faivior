import Styled from 'styled-components'
import { maxQuery } from '../../helpers/media'

export default Styled.div`
margin: 1em;
padding: 1em 1.5em;
${maxQuery('md')} {
    padding: 0.5em;
}
div.top--bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 400;
    justify-content: space-between;
    margin-bottom: 1.2em;
}
div.notification--container {
    border: 1px solid #E6E8F1;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    overflow-x: auto;
    height: 80vh;
    padding: 2em;
    background: #fff;
        max-width: 50rem;
    form {
        max-width: 45rem;
        margin: 0 auto;
        width: 100%;
        div.paySync--checkbox {
                    margin-right: 1em;
                }
        div.address--list__container {
            margin-top: -1em;
            padding: 0 1em;
            padding-top: 1em;
            overflow: auto;
            margin-bottom: 2em;
            border: 1px solid #eee;
            border-radius: 10px;
            max-height: 15rem;
            ${({ theme }) => theme.scrollBaxMixin};
            div {
                margin-bottom: 1em;
                p {
                    font-size: 0.9rem;
                }
                &:not(:last-child) {
                    border-bottom: 1px solid #eee;
                    padding-bottom: 1em;
                }
            }
        }
        }
        footer {
            display: flex;
            justify-content: space-between;
            button {
                display: block;
                &:first-child {
                    padding-left: 0px;
                }
            }
        }
    }
}
`
