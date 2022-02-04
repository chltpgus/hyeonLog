import styled, { css } from 'styled-components';
import {
    typography,
    TypographyProps,
    space,
    SpaceProps,
    color,
    ColorProps,
    layout,
    LayoutProps,
    flexbox,
    FlexboxProps,
    borders,
    BordersProps
} from 'styled-system';

type GlobalTypes = ColorProps &
    TypographyProps &
    SpaceProps &
    LayoutProps &
    BordersProps &
    FlexboxProps;

const ParentCss = css<GlobalTypes>`
    ${typography}
    ${space}
	${color}
	${layout}
	${flexbox}
	${borders}
`;

const ParentColCss = css<GlobalTypes>`
    ${typography}
    ${space}
	${color}
	${flexbox}
	${borders}
`;

const GlobalStyled = {
    Col: styled.div<GlobalTypes>`
        display: flex;
        width: ${(props) => props.width}%;
        align-items: center;
        ${ParentColCss}
    `,
    Row: styled.div<GlobalTypes>`
        display: flex;
        width: 100%;
        ${ParentCss}
    `,
    HeightRow: styled.div<GlobalTypes>`
        display: flex;
        width: 100%;
        flex-direction: column;
        ${ParentCss}
    `
};

export default GlobalStyled;
