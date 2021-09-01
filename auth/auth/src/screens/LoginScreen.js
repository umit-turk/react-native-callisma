import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Error from '../components/Error'
import FilledButton from '../components/FilledButton'
import Heading from '../components/Heading'
import Input from '../components/Input'
import TextButton from '../components/TextButton'

export default function LoginScreen({navigation}) {
    const goToRegister = () => {
        navigation.navigate("RegisterScreen")
    }
    return (
        <View>
            <Heading style={styles.title}>LOGIN</Heading>
            <Error error={"I am an error"} />
            <Input placeholder="email" />
            <Input  placeholder="password"  />
            <FilledButton title={"login"} style={styles.loginButton} onPress={() => {}}  />
            <TextButton title={"have u an account?"} onPress={goToRegister} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        justifyContent: "center"
    },
    title: {
        marginBottom: 48,
    },
    loginButton: {
        marginVertical: 20,
    },
    
})
