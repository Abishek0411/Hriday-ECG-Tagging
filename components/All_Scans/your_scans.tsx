import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const YourScans = () => {
    return(
        // Size of the Container
        <View style={styles.container}>
            {/* Text */}
            <Text style={styles.text}>Your Scans</Text>
            
            {/* Line */}
            <View style={styles.line}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        top: 60,
        marginBottom: 40,
    },
    text: {
        left: 20, // Text starts 5 pixels from left of the container
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Inter",
    },
    line: {
        top: 7, // Line is 10 pixels below top of container
        height: 1,
        alignSelf: 'center',
        width: '90%',
        left: 2, // Line is 2 pixels from the left of the container
        backgroundColor: '#507AB9',
    },
});

export default YourScans;