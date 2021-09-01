import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Error from '../components/Error'
import FilledButton from '../components/FilledButton'
import Heading from '../components/Heading'
import Input from '../components/Input'
import TextButton from '../components/TextButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function RegisterScreen({navigation}) {
    const goToLogin = () => {
        navigation.navigate("LoginScreen");
    }
    return (
        <View>
            <Heading style={styles.title}>REGISTER</Heading>
            <Icon style={styles.icon} name="exit-run" size={30} onPress={goToLogin} />
            <Error error={"I am an error"} />
            <Input placeholder="email" />
            <Input  placeholder="password"  />
            <FilledButton title={"login"} style={styles.loginButton} onPress={() => {}}  />
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
    icon :{
        alignSelf: "center"
    }
})
