import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ContainerMain = styled.View`
    flex-direction:column;
    flex:1;
    padding:20px;
    justify-content: flex-end;
    
`;
const ContainerSec = styled.View`
    flex-direction:row;
    justify-content: center;
    
`;
const ButtonContainer = styled.TouchableOpacity`
    
    border-radius:100px;
    width: 70px;
    height: 70px;
    
    
    background-color: ${props => props.bgColor};
`;

const ButtonText = styled.Text`
  
    text-align: center;
`;

const PressableButtonCap = ({ onPress, bgColor, title }) => (
    <ContainerMain>
        <ContainerSec>
            <ButtonContainer onPress={onPress} bgColor={bgColor}>
                <ButtonText>
                    <MaterialCommunityIcons name="circle-slice-8" color={'black'} size={87} />
                    {title}</ButtonText>
            </ButtonContainer>
        </ContainerSec>

    </ContainerMain>

);

export default PressableButtonCap;