import styled, {css} from 'styled-components';

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #070600;
    z-index: -1;
`;
export const RevealP = styled.p`
    position: relative;
    &:after{
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;

        transition: transform 1s;
        transform-origin: left;
        transform: rotateY(90deg);
    }

    ${({ hide }) => hide && css`
        &:after{
            transform: rotateY(0deg);
        }
    `}
`;