import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ButtonContainer = styled.TouchableOpacity`
    border-radius:7px;
    margin-vertical: 80px;
    width: 200px;
    height: 40px;
    padding: 10px;
    background-color: ${props => props.bgColor};
`;

const ButtonText = styled.Text`
    font-weight:bold;
    font-size: 15px;
    color: #ffffff;
    text-align: center;
`;

const PressableButton = ({ onPress, bgColor, title }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        <ButtonText>
            <MaterialCommunityIcons name="delete-forever-outline" color={'white'} size={15} />
            {title}</ButtonText>
    </ButtonContainer>
);

export default PressableButton;