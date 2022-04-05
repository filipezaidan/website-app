import * as S from './styles'

interface Props {
    isOpen: boolean;
    toggle: () => void;

}

function Sidebar({ isOpen, toggle }: Props) {
    return (
        <S.Container isOpen={isOpen}>
            <S.Icon onClick={toggle}>
                <S.CloseIcon />
            </S.Icon>

            <S.Wrapper>
                <S.Menu>
                    <S.Link to='about'>About</S.Link>
                    <S.Link to='discover'>Discover</S.Link>
                    <S.Link to='services'>Services</S.Link>
                    <S.Link to='signup'>Sign Up</S.Link>

                </S.Menu>
                <S.ButtonWrapper>
                    <S.Route to='/signin'>Sign In</S.Route>
                </S.ButtonWrapper>
            </S.Wrapper>
        </S.Container>
    )
}

export default Sidebar