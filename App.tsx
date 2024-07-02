import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import ImagePick from './components/ImagePickerPage.tsx';
import EntrancePage from './components/EntrancePage.tsx';
import ScanPage from './components/ScanPage.tsx';
import HomePage from './components/HomePage.tsx';
import MapScreen from './components/MapScreen.tsx';
import IndexingPage from './components/IndexingPage.tsx';
import LoadingIcon from './components/LoadingIcon.tsx';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='EntrancePage'>
        <Stack.Screen name="Entrance" component={EntrancePage} options={{headerBackVisible: false, headerShown: false}} />
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{
            headerBackVisible: false, 
            headerTitleAlign: "center"
            }}
        />
        <Stack.Screen 
          name="Camera" 
          component={ImagePick} 
          options={{
            headerTitleAlign: "center", 
            headerTitle: "ECG Scanner", 
          }}
        />
        <Stack.Screen 
          name="ScanPage" 
          component={ScanPage}
          options={{
            headerTitle: ''
          }}
         />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;