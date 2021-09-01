import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Input({placeholder}) {
    return (
        <View>
            <TextInput style={styles.text_input} placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    text_input: {
        borderWidth: 1,
        width: 300,
        alignSelf: "center",
        height: 50,
        backgroundColor: "#CCC",
        marginVertical: 8,
        paddingLeft: 10,
        color: "black",
        borderRadius: 10,
    }
})
