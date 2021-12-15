import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Camara } from './pages/Camara';
import { Galeria } from './pages/Galeria';
import { Delete } from './pages/Delete';



const Tab = createBottomTabNavigator();
 

const MyTabs=()=> {
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{}, [photos]); 
    console.log('photos del padre.................',photos)
   
    return (
      <Tab.Navigator initialRouteName="Camara" screenOptions={{
          tabBarActiveTintColor: 'white', }}>
              
              <Tab.Screen name="Camara" options={{
                  headerShown:false,
                  tabBarStyle: { backgroundColor: 'black' },
                  tabBarLabel: 'Camara',
                  tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="camera" color={color} size={size} />), }}>
              {(props)=>
                  <Camara {...props} setPhotos={setPhotos}/>}
              </Tab.Screen>
              
              <Tab.Screen name="Galeria" options={{
                  headerShown:false,
                  tabBarStyle: { backgroundColor: 'black' },
                  tabBarLabel: 'Galeria',
                  tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="folder-multiple-image" color={color} size={size} />), }}>
              {(props)=>
                  <Galeria {...props} photos={photos}/>}
            </Tab.Screen>

              <Tab.Screen name="Delete"   options={{
                  headerShown:false,
                  tabBarStyle: { backgroundColor: 'black' },
                  tabBarLabel: 'Delete',
                  tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="delete-forever-outline" color={color} size={size} />), }}>
               {(props)=>
                  <Delete {...props} setPhotos={setPhotos}/>}
              </Tab.Screen>

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



