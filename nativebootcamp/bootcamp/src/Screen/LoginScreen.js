import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginScreen() {

    const navigation = useNavigation()
    const params = useRoute()
    console.log("navigation", navigation, "params", params)

    const login = async () => {
    await AsyncStorage.setItem("projectKey", JSON.stringify({isLogin: true}))
    }


    return (
        <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>LoginScreen</Text>
            <Button title="giriş yap" onPress={async () => await login()} />
        </SafeAreaView>
    )
}
