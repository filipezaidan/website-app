import styled from 'styled-components';
import * as I from 'react-icons/md'

export const Container = styled.section`
    background: #0c0c0c;
    display: flex;
    align-items: center; 
    justify-content: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`
export const HeroBg = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media styled and (max-width: 768px){
        font-size: 40px;
    }

    @media styled and (max-width:480px){
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex ;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(I.MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(I.MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`