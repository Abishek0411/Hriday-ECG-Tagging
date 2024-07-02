import Geolocation from '@react-native-community/geolocation';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import { Platform, PermissionsAndroid, Alert } from 'react-native';

const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to show the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message: "<h2>Use Location?</h2> \
                  This app wants to change your device settings:<br/><br/>\
                  Use GPS for location<br/><br/>",
        ok: "YES",
        cancel: "NO",
      }).then(() => {
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Current location:', { latitude, longitude });
            resolve({ latitude, longitude }); // Resolve with location coordinates
          },
          (error) => {
            console.log(error);
            reject('Could not get current location');
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      }).catch((error) => {
        console.log(error.message);
        reject('Location services are not enabled');
      });
    });
  };
  

export { requestLocationPermission, getCurrentLocation };