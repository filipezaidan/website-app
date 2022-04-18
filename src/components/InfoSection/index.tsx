import { Button } from '../Button/styles'
import * as S from './styles'
import { InfoDataProps } from '../../mock/InfoData'

interface Props {
    data: InfoDataProps;
}

function InfoSection({ data }: Props) {
    return (
        <S.Container lightBg={data.lightBg} id={data.id}>
            <S.InfoWrapper>
                <S.InfoRow imgStart={data.imgStart}>
                    <S.Column1>
                        <S.TextWrapper>
                            <S.TopLine>{data.topLine}</S.TopLine>
                            <S.Heading lightText={data.lightText}>{data.headLine}</S.Heading>
                            <S.Subtitle darkText={data.darkText}>{data.description}</S.Subtitle>
                            <S.BtnWrap>
                                <Button
                                    to="home"
                                    smooth
                                    spy
                                    duration={500}
                                    offset={-80}
                                    primary={data.primary}
                                    dark={data.dark}

                                >{data.buttonLabel}</Button>
                            </S.BtnWrap>
                        </S.TextWrapper>
                    </S.Column1>
                    <S.Column2>
                        <S.ImgWrap>
                            <S.Img src={data.img} />
                        </S.ImgWrap>
                    </S.Column2>
                </S.InfoRow>
            </S.InfoWrapper>
        </S.Container>
    )
}

export default InfoSection