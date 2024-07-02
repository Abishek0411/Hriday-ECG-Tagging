import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { getCurrentLocation } from './GetLocation';

const { width, height } = Dimensions.get('window');

const ScanPage = ({ navigation, route }) => {
  const { message, prediction } = route.params;
  const [currentLocation, setCurrentLocation] = useState(null); // State to store current location
  const [loading, setLoading] = useState(false); // State to manage loading indicator

  const getHealthContainerStyle = () => {
    return {
      ...styles.healthContainer,
      backgroundColor: prediction === "The provided ECG seems Healthy" ? "#85FC91" : "#FF4545",
    };
  };

  const handleViewMap = async () => {
    try {
      setLoading(true); // Set loading to true when fetching location

      // Fetch location only if it hasn't been fetched before
      if (!currentLocation) {
        const location = await getCurrentLocation();
        setCurrentLocation(location); // Save location once fetched
      }

      setLoading(false); // Set loading to false after location is fetched

      if (currentLocation && currentLocation.latitude && currentLocation.longitude) {
        navigation.navigate('MapScreen', { latitude: currentLocation.latitude, longitude: currentLocation.longitude });
      } else {
        Alert.alert('Location Error', 'Could not retrieve current location. Please try again.');
      }
    } catch (error) {
      setLoading(false); // Set loading to false in case of error
      Alert.alert('Location Error', 'Could not retrieve current location. Please try again.');
      console.error('Error retrieving location:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.reportContainer}>
          <Text style={styles.reportText}>REPORT: </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: message }}
            style={{ width: width / 1.9, height: height / 1.9, borderRadius: 10, aspectRatio: 1 }}
            resizeMode="center"
          />
        </View>

        {/* Diagnosis Container */}
        <View style={styles.diagnosisContainer}>
          <Text style={styles.diagnosisText}>Diagnosis</Text>

          <View style={getHealthContainerStyle()}>
            <Text style={styles.prediction}>{prediction}</Text>
          </View>
        </View>

        {/* Maps Container */}
        <View style={styles.mapBoxContainer}>
          <Text style={styles.consultText}>If you want to consult a cardiologist for further details</Text>
          <Text style={styles.nearbyText}>Nearby Cardiologists</Text>

          <TouchableOpacity style={styles.mapContainer} onPress={handleViewMap}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Image 
                style={{
                  resizeMode: "contain",
                  height: 200,
                }}
                source={require('/home/piyush24/Desktop/ReactNative-App/MyReactApp/assets/gmaps_logo.png')}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.emptyContainer}></View>
      </View>
    </ScrollView>  
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  reportContainer: {
    width: "100%",
    marginBottom: 10,
    marginTop: 30,
  },
  reportText: {
    fontWeight: "bold",
    left: 30,
    fontFamily: "inter",
    fontSize: 18,
    color: "black",
  },
  imageContainer: {
    alignSelf: 'center',
    height: 200,
    width: '90%',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  diagnosisContainer: {
    backgroundColor: "white",
    width: "96%",
    height: 190,
    borderRadius: 17,
    flexDirection: "column",
    elevation: 10,
    alignSelf: "center",
  },
  diagnosisText: {
    fontWeight: "bold",
    fontFamily: "inter",
    fontSize: 25,
    marginTop: 20,
    marginLeft: 20,
    color: "black",
    width: 140,
    height: 40,
  },
  healthContainer: {
    marginTop: 17,
    width: "95%",
    height: "50%",
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  prediction: {
    flexDirection: "column",
    fontSize: 20,
    fontFamily: "inter",
    fontWeight: 'bold',
    color: 'black',
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
  },
  mapBoxContainer: {
    backgroundColor: "white",
    marginTop: 30,
    width: "96%",
    height: 290,
    borderRadius: 17,
    elevation: 10,
    alignSelf: "center",
  },
  consultText: {
    fontFamily: "inter",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    width: "93%",
    alignSelf: "center",
    marginTop: 20,
  },
  nearbyText: {
    width: "90%",
    fontFamily: "inter",
    fontSize: 20,
    fontWeight: "bold", 
    color: "black",
    alignSelf: "center",
    marginTop: 20,
  },
  mapContainer: {
    backgroundColor: "#E5E4E2",
    width: 250,
    height: 120,
    borderRadius: 17,
    marginLeft: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMapText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyContainer: {
    height: 20,
  }
});

export default ScanPage;
