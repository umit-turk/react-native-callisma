import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Heading({children, style, ...props}) {
    return (
        <View>
            <Text {...props} style={[style, styles.text]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        color: "black",
        paddingTop: 100,
        textAlign:"center",
    }
})