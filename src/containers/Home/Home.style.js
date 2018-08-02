import styled, {css} from 'styled-components';

export const Intro = styled.div`
            display: flex;
            flex-direction: column;
        `;
export const IntroBanner = styled.div`
            height: 100vh;
            background: #000000;
            display: flex;
            flex-flow: row nowrap;
            overflow: hidden;
            align-items: center;
            font-size: 1.5em;
        `;

export const Image = styled.img`
            max-width: 60%;
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