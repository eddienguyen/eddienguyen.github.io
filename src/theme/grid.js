import styled, { css } from 'styled-components';
import media from './media';
import { color, black } from 'theme/variables';
// - The below styled 'Div' will be use for inheritance of next components(Container, Relative, Flex...)
//   reference: https://www.styled-components.com/docs/basics#styling-any-components
// - Customize function: if 'marginBottom' is defined, add 'margin-bottom' 
//   with 'marginBottom' as value to this Div
export const Div = styled.div`
    overflow: hidden;
    
    ${({ marginTop }) => marginTop && css`
        margin-top: ${marginTop};
    `};

    ${({ marginRight }) => marginRight && css`
        margin-right: ${marginRight};
    `};

    ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom};
    `};

    ${({ marginLeft }) => marginLeft && css`
        margin-left: ${marginLeft};
    `};

    ${({ margin }) => margin && css`
        margin: ${margin};
    `}

    ${({ height }) => height && css`
        height: ${height};
    `};

    ${({ width }) => width && css`
        width: ${width};
    `};

    background-color: ${props => color[props.bgColor]};
    color: ${props => color[props.fontColor]};

    ${({ floating }) => floating && css`
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    `}
`;

// export Container
// order: larger size is put above smaller size 
export const Container = styled(Div)`
    padding: 30px 120px 0 120px;
    ${media.large`
        padding: 30px 120px 0 120px;
    `};
    ${media.desktop`
        padding: 30px 120px 0 120px;
    `};
    ${media.tablet`
        padding: 15px 30px 0 30px;
    `};
    ${media.phone`
        padding: 15px 10px 0 10px;
    `};
`;

export const Relative = styled(Div)`
    position: relative;
`;

// justify is for customize 'justify-content',
// this function checks if there's 'justify' attr and then style it with css
// same does 'align'
// 'column' function checks if there's 'column' attr call then change 
// flex-direction to column, if not, keep the default direction: row
export const Flex = styled(Div)`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'}

    ${({ justify }) => justify && css`
        justify-content: ${justify};
    `};

    ${({ align }) => align && css`
        align-items: ${align};
    `};

    ${media.phone`
        flex-direction: column;
    `}

`;

export const Section = styled.section`
    background-color: ${black};
`;
