import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import TopContainer from './All_Scans/top_container.tsx'
import YourScans from './All_Scans/your_scans.tsx';
import Scans from './All_Scans/scan.tsx';
import BottomBar from './navigation_bar.tsx';

function AllScans(): React.JSX.Element {
    const isDarkMode = useColorScheme() === "dark";
  
    {/* A function that renders scan every count, till a limit has reached */}
    const ScanBlock = ({ count, navigation } : {count: number, navigation: any}) => {
      if (count <= 0) {
        return null;
      }
      return (
        <ScrollView contentContainerStyle={styles.scans_container}>
          {/* Making the scans container dynamic */}
          <Scans />
          <ScanBlock count={count - 1} />
        </ScrollView>
      );
    };
  
    
    // Content of the app
    return (
      // Contains all the elements
      <View style={styles.full_container}>
        {/* White space on top */}
        <TopContainer />
  
        {/* Your Scans Text */}
        <YourScans />
  
        {/* Perhaps I can recursively push scans through a function */}
  
        <ScanBlock count={7} />
  
        <BottomBar navigation={navigation}/>
        
      </View>
    )
  }
  
  // Stylesheet
  const styles = StyleSheet.create({
    // Containerize the entire app
    full_container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
    },
    scans_container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  
  });

export default AllScans;