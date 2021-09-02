import React from 'react'
import {  Text, useColorScheme,StyleSheet } from 'react-native'

export default function index({ text, containerStyle, isDarkMode}) {

    const themeStyle = isDarkMode ? styles.darkText : styles.lightText

    const container = {...themeStyle, ...containerStyle}
    return (
        <Text style={container}>{text}</Text>
        
    )
}

const styles = StyleSheet.create({
    lightText: {fontSize: 15, letterSpacing: 3, color:"#000"},
    darkText: {fontSize: 15, letterSpacing: 3, color:"#fff"}
})
