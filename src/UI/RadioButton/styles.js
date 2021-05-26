import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1em;
    
    input {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
        margin: 0px;
        &:checked + .radio__control {
            &::after {
                background: ${({ theme }) => theme.primary};
            }
        }
    }
    .radio__control {
        display: block;
        width: 18px!important;
        height: 18px!important;
        border-radius: 50%;
        border: 1px solid #855AAF;
        position: relative;
        &::after {
            position: absolute;
            background: red;
            content: "";
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #fff;
        }
    }

`
