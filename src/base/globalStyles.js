import { createGlobalStyle } from 'styled-components'
import { normalize, rgba, rem } from 'polished'
import { maxQuery } from '../helpers'

export default createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
    }
    body, html {
      margin: 0px;
      padding: 0px;
      width: 100vw;
      height: 100vh
      overflow: hidden;
    }
    html {
      font-family: "Nunito";
      background: ${({ theme }) => theme.bgColor}; 

      ${maxQuery('sm')} {
        font-size: 60%;
      }
      ${maxQuery('md')} {
        font-size: 65%;
      }
      ${maxQuery('xxl3')} {
        font-size: 75%;
      }
    }

     body {
      font-weight: normal;
      color: ${({ theme }) => theme.txtColor};
    
      /* img {
        width: 100%;
        height: 100%;
      } */
      h1, h2, h3, h4, p {
        margin: 0px;
        padding: 0px;
      }

      hr {
            border-top: none;
            border-bottom: 1px solid ${rgba('#E1E1E1', 0.5)};
        }

        
       #nprogress .bar {
         background: #fff;
        height: 3px;
      }

      #nprogress .peg {
        box-shadow: 0 0 10px ${({ theme }) => theme.primary}, 0 0 ${({
  theme,
}) => theme.primary};
      }



/* Typography */
 .u--typo__headline--head {
        font-size: ${rem('26px')};
        line-height: ${rem('25px')};
        font-weight: bold;
      }
      .u--typo__headline {
        font-size: ${rem('20px')};
        line-height: ${rem('25px')};
        font-weight: bold;
      }
      .u--typo__title {
        font-size: ${rem('18px')};        
        font-weight: 600;
        color: #555555;
       font-weight: normal;
      }
      .u--typo__smBody {
        font-size: ${rem('13px')};
        line-height: ${rem('15px')};
        letter-spacing: 0.13px;
      }
      .u--typo__lgBody {
        font-size: ${rem('16px')};
        line-height: ${rem('20px')};
      }
      .u--typo__btn, .u--typo__normalBold {
        font-size: ${rem('14px')};
        line-height: ${rem('16px')};
        font-weight: medium;
      }
      .u--typo__normal {
        font-weight: normal;
        font-size: ${rem('14px')};
        line-height: ${rem('20px')};
        letter-spacing: 0px;
      }
      .u--typo__caption {
        font-size: ${rem('13px')};
        line-height: ${rem('16px')};
      }
       .u--typo__caption--small {
        font-size: ${rem('12px')};
        line-height: ${rem('16px')};
      }
      .u--typo__center {
        text-align: center!important;
      }
      /* color */
      .u--color__dark {        
        color: #222222!important;
        font-weight: 600;
        opacity: 1;
      }
      .u--color__light {
        opacity: 0.7;
        color: #222222;
      }
      .u--color__lighter {
        opacity: 0.5;
        color: #222222;
      }

      .u--color__success {
          color: #47C479!important;
      }

       .u--color__failed {
          color: #FF5E5E!important;
      }

      table.MuiTable-root {
        font-size: 0.9rem;
      }
      .MuiPaper-elevation2 {
        box-shadow: none;
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid #E6E8F1;
    }
}
`
