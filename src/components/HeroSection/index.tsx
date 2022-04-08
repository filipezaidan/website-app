import { useState } from 'react'
import { Button } from '../Button/styles'
import * as S from './styles'
import Video from '../../assets/video/video.mp4'

function HeroSection() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <S.Container>
            <S.HeroBg>
                <S.VideoBg
                    autoPlay
                    loop
                    muted
                    src={Video}
                />
            </S.HeroBg>

            <S.HeroContent>
                <S.HeroH1>Virtual Banking Made Easy</S.HeroH1>
                <S.HeroP>
                    Sign up for a new account today and reive $250 in
                    credit towards your next payment.
                </S.HeroP>

                <S.HeroBtnWrapper>
                    <Button
                        to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary
                        dark
                    >
                        Get started {hover ? <S.ArrowForward /> : <S.ArrowRight />}
                    </Button>
                </S.HeroBtnWrapper>
            </S.HeroContent>
        </S.Container>
    )
}

export default HeroSection