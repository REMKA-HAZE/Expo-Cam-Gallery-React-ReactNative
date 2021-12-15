import React, {  } from 'react';
import { View, Text, ScrollView, Image,  StyleSheet } from 'react-native';
export const Galeria = ({photos}) => {
    
   
     return (
  <View style={styles.galleryImageMainContainer}>
      <View style={styles.galleryImageTopContainer}>
        <Text style={{ fontSize: 40,
                                    color: 'red',}}> </Text>
      </View>
      {/* The ScrollView allow us to create a scrollable component */}
      <ScrollView
        automaticallyAdjustContentInsets={false} // All of those are props
        contentInSet={{ bottom: 49 }}
        style={styles.galleryImageScrollContainer}
        horizontal={true}
        alwaysBounceHorizontal={true}
        bounces={true}
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        pagingEnabled={true}
      >
        {/* We iterate over the photos array */}
        {photos?.map((photo, index) => (
          //And for each iteration we return an image
          <Image
            key={index}
            source={{ uri: photo.uri }} // Props, photo.uri is the current location of the image captured
            style={styles.galleryImageImage}
          ></Image>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    galleryImageMainContainer: {
    position: "absolute",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    top: 80,
  },
  galleryImageTopContainer: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  galleryImageScrollContainer: {
    padding: 0,
    margin: 0,
  },
  galleryImageImage: {
    width: 365,
    margin: 15,
    height: 600,
    resizeMode: "stretch",
    borderRadius: 10,
  },
});

export default Galeria;