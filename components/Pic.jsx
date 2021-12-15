
import React, { useState } from 'react';
import { Camera } from 'expo-camera';
import PressableButtonCap from '../components/BottomCap';
import { Alert, ActivityIndicator } from 'react-native';

export const Pic = ({ setCapturedImage, savePhoto }) => {
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [animating, setAnimation] = useState(false);

    const _capturar = async () => {
setAnimation(true)
  
        const photo = await camera.takePictureAsync();
        console.log('haber............',photo);
        setCapturedImage(photo);
       
        savePhoto();
        setAnimation(false)
        Alert.alert('Se guardo la imagen correctamente');
     

    };

    let camera = Camera;
    return (
        <Camera ratio='16:9' style={{ flex: 1 }} type={type} ref={(r) => { camera = r; }}>
            <ActivityIndicator animating={animating} color='#bc2b78' size='large' style={{flex:1, justifyContent:'flex-end'}} />
            <PressableButtonCap bgColor="white" onPress={_capturar} />

        </Camera>
    );
}
export default Pic;