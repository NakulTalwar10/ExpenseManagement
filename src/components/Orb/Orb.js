import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const { width, height } = useWindowSize()

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

    const OrbStyled = styled.div`
        width: 50vw;
        height: 50vw;
        max-width: 70vh;
        max-height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -25vw;
        margin-top: -25vw;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveOrb} 15s alternate linear infinite;
        
        @media screen and (max-width: 768px) {
            max-width: 50vw;
            max-height: 50vw;
            margin-left: -20vw;
            margin-top: -20vw;
        }

        @media screen and (max-width: 480px) {
            max-width: 70vw;
            max-height: 70vw;
            margin-left: -35vw;
            margin-top: -35vw;
        }
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb
