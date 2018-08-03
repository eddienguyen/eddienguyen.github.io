import styled from 'styled-components';

export const ImageButton = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    & > img {transition: transform 0.3s ;}
    &:hover{
        & > img{
            filter: blur(3px);
            transform: scale(1.05);
        }
    }
`;

export const Index = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
`;