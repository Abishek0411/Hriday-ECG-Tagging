import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params;

  const getGoogleMapsUrl = (latitude, longitude) => {
    const query = 'cardiologists';
    return `https://www.google.com/maps/search/${query}/@${latitude},${longitude},15z`;
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: getGoogleMapsUrl(latitude, longitude) }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MapScreen;
