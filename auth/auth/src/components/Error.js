import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Error({error}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    text: {
        color: "red",
        textAlign: "center",
        paddingVertical: 8
        
    }
})