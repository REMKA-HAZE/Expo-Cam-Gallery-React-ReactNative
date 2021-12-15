
import React, { useState, useEffect } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import Pic from '../components/Pic';
import { Camera } from 'expo-camera';

export const Camara = ({setPhotos}) =>{
  const isFocused = useIsFocused();
  const [startCamera, setStartCamera] = useState(true);

  const [capturedImage, setCapturedImage] = useState([]);//

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setStartCamera(status === "granted");
    })();
  }, []);

  const __savePhoto = () => {
    console.log('savephoto.....................',capturedImage)
    
    setPhotos((currentPhotos) => {
      return [capturedImage, ...currentPhotos];
    });
  };
  

  
  return (
   <View style={styles.container}>
      {isFocused ? (

          <Pic
            setCapturedImage={setCapturedImage}
            setStartCamera={setStartCamera}
            savePhoto={__savePhoto}
          />
      
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  cameraTakePictureOnMain: {
    position: "absolute",
    bottom: 40,
    width: 120,
    borderRadius: 100,
    height: 120,
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

export default Camara;
