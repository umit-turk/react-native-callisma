import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

export default function Settings() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Settings</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
