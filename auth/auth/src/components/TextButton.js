import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TextButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.btntext}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        alignSelf: "center",
        borderRadius: 10
    },
    btntext: {
        textAlign: "center",
        padding: 20,
        fontSize: 20,
        color: "purple",
    }
})