import React from 'react';
import styled from 'styled-components/native';


const ButtonText = styled.Text`
    letter-spacing: 6px;
    font-size: 25px;
    color: #ffffff;
    text-align: center;
`;
const Label1 = ({ label }) => (

    <ButtonText>{label}</ButtonText>

);
export default Label1;