import React, {  } from 'react';
import { View } from 'react-native';
import PressableButton from '../components/Bottom';
import Label1 from '../components/Label';

export const Delete = ({setPhotos}) =>{

   
 



  const __deletePhotos = () =>{
    setPhotos((currentPhotos)=>{
      return [{}, currentPhotos];
    })
  }
      return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
     
        <Label1 label='Luis Gerardo Castañeda López.'></Label1>
        <Label1 label='180060'></Label1>
        <Label1 label='IDGS 10 A.'></Label1>

          <PressableButton onPress={__deletePhotos} title="Eliminar Galeria" bgColor="red"></PressableButton>
          
    </View>
  );
}


export default Delete;