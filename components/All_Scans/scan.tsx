import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Scans = () => {
    return (
        <View style={styles.container}>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#494D4F',
        alignSelf: 'center',
        flexDirection: "row",
        height: 141,
        width: '90%',
        borderRadius: 12,
        marginBottom: 10, 
    },
    text: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Scans;