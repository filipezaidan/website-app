import styled, { css } from "styled-components";
import { Link } from 'react-scroll'

interface ButtonProps {
    primary?: boolean;
    big?: boolean;
    dark?: boolean;
    fontBig?: boolean;
}
export const Button = styled(Link) <ButtonProps>`
    border-radius: 50px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    ${(props) => css`
        background : ${(props.primary ? '#01bf71' : '#010606')};
        padding: ${(props.big ? '14px 48px' : '12px 30px')};
        color:  ${(props.dark ? '#010606' : '#fff')};
        font-size: ${(props.fontBig ? '20px' : '16px')};
    `}

    &:hover{
        transition: all 0.2s ease-in-out;
        background:  ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    }
`