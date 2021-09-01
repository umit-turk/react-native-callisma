import React from 'react'
import { View, Text, Button } from 'react-native'

export default function first({navigation}) {

    const goToRegister = () => {
        navigation.navigate("register");
    }
    return (
        <View>
            <Button onPress={goToRegister} title="go to register"></Button>

        </View>
    )
}
