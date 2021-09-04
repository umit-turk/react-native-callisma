import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

export default function LoginScreen() {

    const navigation = useNavigation()
    const params = useRoute()
    console.log("navigation", navigation, "params", params)


    return (
        <SafeAreaView style={{flex: 1, alignItems: "center"}}>
            <Text>LoginScreen</Text>
            <Text>{params.params.text}</Text>
            <Button title="Anasayfaya dön" onPress={() =>navigation.navigate("HomeScreen")} />
            <Button title="Anasayfaya dön" onPress={() =>navigation.goBack()} />
        </SafeAreaView>
    )
}
