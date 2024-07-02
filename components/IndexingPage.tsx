import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

const IndexingPage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.component}>
        <Text style={styles.header}>Stability Component</Text>
        <Text style={styles.title}>ROM strength and Mobility</Text>
        
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Standing on both legs:</Text>
        <View style={styles.checkboxContainer}>
          {Array(4).fill(null).map((_, index) => (
            <View key={index} style={styles.checkbox}></View>
          ))}
        </View>

        <Text style={styles.label}>Standing on the affected legs:</Text>
        <View style={styles.checkboxContainer}>
          {Array(4).fill(null).map((_, index) => (
            <View key={index} style={styles.checkbox}></View>
          ))}
        </View>

        <Text style={styles.label}>Walking on plain surfaces:</Text>
        <View style={styles.checkboxContainer}>
          {Array(4).fill(null).map((_, index) => (
            <View key={index} style={styles.checkbox}></View>
          ))}
        </View>

        {/* Add more containers here */}
        <Text style={styles.label}>Additional Activity:</Text>
        <View style={styles.checkboxContainer}>
          {Array(4).fill(null).map((_, index) => (
            <View key={index} style={styles.checkbox}></View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#E0D4FF',
        padding: 16,
      },
      component: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      },
      header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 8,
      },
      title: {
        fontSize: 16,
        color: '#4B0082',
        marginBottom: 16,
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
      },
      input: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
      },
      checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
      },
});

export default IndexingPage;