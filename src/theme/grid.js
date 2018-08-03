import styled, {css} from 'styled-components';


// - The below styled 'Div' will be use for inheritance of next components(Container, Relative, Flex...)
//   reference: https://www.styled-components.com/docs/basics#styling-any-components
// - Customize function: if 'marginBottom' is defined, add 'margin-bottom' 
//   with 'marginBottom' as value to this Div
export const Div = styled.div`
    ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom};
    `};
`;

//export Container
export const Container = styled(Div)`
    padding: 30px 120px 0 120px;
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

`;

