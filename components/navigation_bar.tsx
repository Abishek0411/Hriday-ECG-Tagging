import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

const BottomBar = ({ navigation }:{ navigation : any }) => {
    const goToImagePicker = () => {
        navigation.navigate('Camera')
    }
    return (
        <View style={styles.container}>
            <View style={styles.imagePick}>
                <TouchableOpacity onPress={goToImagePicker}>
                    <Image source={require('/home/piyush24/Desktop/ReactNative-App/MyReactApp/assets/Scan_icon.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        alignItems: "center",
        height: 50,
        marginTop: 1,
        justifyContent: "center",
        flexDirection: "row",
        width: '100%',
    },
    imagePick: {
        alignItems: "center",
    },
    icon: {
        height: 40,
        width: 40,
    },
});

export default BottomBar;