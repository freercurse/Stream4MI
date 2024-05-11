import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text>This is View 1</Text>
            </View>
            <View style={styles.wrapper}>
                <Text>This is View 2</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '100%'
    },

    wrapper: {
        width: '40%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        height: '87%'
    }
});

