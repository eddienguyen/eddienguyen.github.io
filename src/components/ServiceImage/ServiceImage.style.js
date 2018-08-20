import styled from 'styled-components';
import { Div } from 'theme/grid';
import { color } from 'theme/variables';

const ServiceImageContainer = styled(Div)`
    margin: 10px 20px;
    background-color: ${color.white};
    color: ${color.black};
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 1);
    border-radius: 3px;
    font-size: .9em;
    position: relative;

    
`;

export const Image = styled.img`
    width: 100%;
    position: absolute; 
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
    filter: blur(0);
    transition: .2s ease-in-out;

    ${ServiceImageContainer}:hover & {
        filter: blur(4px);
    };
`;

export const ImageContainer = styled(Div)`
    width: 100%;
    position: relative;
    padding-top: 56.25%;
    background-color: ${color.black};
`;

export const ContentContainer = styled(Div)`
    position: absolute; 
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    text-align: center;
    background: transparent;
    width: 60%;
    margin: auto;
    
    transition: .1s linear;
    visibility: hidden;
    border: 2px solid ${color.black};

    ${ServiceImageContainer}:hover & {
        visibility: visible;

        &:after{
            content: ' ';
            position: absolute;
            background-color: rgba(256, 256, 256, 0.3);
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter:blur(10px);
            
        };
    };
    
`;

export { 
    ServiceImageContainer
};
