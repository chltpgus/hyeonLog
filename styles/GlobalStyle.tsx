import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
    html {
        font-size : 14px;
    }
    body{
        color : ${theme.colors.gray800};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Noto Sans KR', sans-serif ;
        background-color : ${theme.colors.white};
        margin : 0;
    }
    img{
        max-width: 100%;
        vertical-align: middle;
        border-style: none;
    }
    button{
        font-family: 'Noto Sans KR';
        color : ${theme.colors.gray800};
    }
    ul{
        list-style-type: none;
        margin-top: 0;
        margin-bottom : 0;
        padding-left : 0px;
    }
    a{
        text-decoration : none;
        color: inherit;
    }
    *, ::before, ::after {
        box-sizing : border-box;
    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color : #DCDCDC;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
    }
`;

export default GlobalStyle;
