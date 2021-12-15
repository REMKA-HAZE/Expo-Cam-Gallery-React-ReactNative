import React from "react";
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet } from "react-native";


const PicPreview = ({ photo, retakePicture, savePhoto }) => {
    return (
        // CameraPreview Component
        <View style={styles.cameraPreviewMainContainer}>
            {/* ImageBackground takes a picture and gets covered from it */}
            <ImageBackground
                source={{ uri: photo && photo.uri }}
                style={styles.imageBackground}
            >
                {/* Container for the Re-take and Save Photo buttons  */}
                <View style={styles.CameraPreviewContainer}>

                    <View style={styles.cameraPreviewBottomContainer}>

                        <TouchableOpacity onPress={retakePicture} style={styles.retakePictureButtons}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Re-take</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={savePhoto} style={styles.retakePictureButtons}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Save photo</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    cameraPreviewMainContainer: {
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
    },
    CameraPreviewContainer: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        justifyContent: "flex-end",
    },
    cameraPreviewBottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    retakePictureButtons: {
        width: 130,
        height: 40,
        alignItems: "center",
        borderRadius: 4,
    },
    imageBackground: {
        flex: 1,
    },
});
export default PicPreview;