import styled from 'styled-components';
import { Div, Flex } from 'theme/grid';
import { color } from 'theme/variables';
import { Link } from 'react-router-dom';

/**
 * SCROLLING NAV with dynamic opacity and border-bottom
 * default(when at top) => not showing(opacity = 0);
 * if opacity existed(start scrolling away from top) => start showing this NavBar
 * if opacity is fully 1 (away from top) => show border-bottom
 */
export const ScrollingNav = styled(Flex)`
    position: fixed;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 120px;
    z-index: 100;
    width: 100%;
    border-bottom: solid ${color.lightBlue};
    background-color: ${color.black};
    opacity: ${props => props.opacity
        ? Math.max(props.opacity, 0.2)
        : 0
    };

    border-bottom-width: ${props => props.opacity === 1
        ? props.borderBottomWidth
        : 0
    };
`;

export const DefaultNav = styled(Flex)`
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
`;

export const NavItem = styled(Link)`
    margin-right: 30px;
    font-size: 0.8em;
    cursor: pointer;
    color: ${color.white};
    position: relative;
    text-decoration: none;

    &:after{
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        background-color: ${color.white};
        transition: height .1s;
    }
    &:hover {
        color: ${color.lightBlue};
        
        &:after {
            
            height: 90%;
            
            z-index: -3;
        }
    };
`;