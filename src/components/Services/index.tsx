import * as S from './styles'
import { ServicesData } from '../../mock/ServicesData';

function Services() {
    return (
        <S.Container id='services'>
            <S.Title>Our Services</S.Title>

            <S.Wrapper>
                {ServicesData.map((item, key) => (
                    <S.Card key={key}>
                        <S.CardIcon src={item.icon} />
                        <S.CardTitle>{item.title}</S.CardTitle>
                        <S.CardDescription>{item.description}</S.CardDescription>
                    </S.Card>
                ))}
            </S.Wrapper>
        </S.Container>
    )
}

export default Services;