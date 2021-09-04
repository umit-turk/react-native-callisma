import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'

export default function HomeScreen(props) {
    console.log("props", )
    return (
        <SafeAreaView style={{flex: 1, alignItems: "center"}}>
            <Text>HomeScreen</Text>
            <Button title="Detaya git" onPress={() => props.navigation.navigate("DetailScreen")} />
            <Button title="logine git" onPress={() => props.navigation.navigate("LoginScreen",{
                text: "Merhaba ben geldim"
            })} />
            <Button title="detaya parametreli git" onPress={() => props.navigation.navigate("DetailScreen",{
                name:"Umit",
                surname:"Turk"
            })} />
        </SafeAreaView>
    )
}
