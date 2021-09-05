import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'

export default function HomeScreen(props) {

    const logOut = async () => {
       await AsyncStorage.setItem("projectKey",JSON.stringify({isLogin: false}));
    }

    return (
        <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>HomeScreen</Text>
            <Button title="Detaya git" onPress={() => props.navigation.navigate("DetailScreen")} />
            <Button title="detaya parametreli git" onPress={() => props.navigation.navigate("DetailScreen",{
                name:"Umit",
                surname:"Turk"
            })} />
            <Button title="çıkış yap" onPress={async () => await logOut()} />
        </SafeAreaView>
    )
}
