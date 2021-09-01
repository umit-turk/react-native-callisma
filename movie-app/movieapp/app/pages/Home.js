import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
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
