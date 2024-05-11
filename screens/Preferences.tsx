import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Preferences() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text>This is Preferences</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: '10%',
        height: '100%'
    },

    wrapper: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        height: '87%'
    }
});

