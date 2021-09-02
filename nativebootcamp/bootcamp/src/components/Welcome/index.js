import React from 'react'
import {View, Text} from 'react-native'
import styles from './style'
function Welcome ({text = "Dısaridan değer boş gelirse bu yazsın", isDarkMode,}) {

    return (
        <View>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>{text}</Text>
        </View>
    )
}

export function SayThank({text= "react native bootcamp", isDarkMode}){
    return (
        <View>
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>{text}</Text>
    </View>
    )
}

export function SayHello({text= "herkese merhaba", isDarkMode}){
    return (
        <View>
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>{text}</Text>
    </View>
    )
}

export default Welcome;