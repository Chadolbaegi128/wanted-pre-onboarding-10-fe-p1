import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    width: 300px;
    height: 50px;
    position: relative;
    top: 60px;
    color: #01161E;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #124559;
    }

    &:active{
        background-color: #59679E;
        color: #eeeeee;
    }
`;

export default Button;