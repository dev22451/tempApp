import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { firstpageLogo, firstpageText } from '../../Assets/Images/index/img'
import styles from './Style'

const SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image source={firstpageLogo}
                    style={styles.logo} />
                <Image source={firstpageText}
                    style={styles.text}
                />
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.logintext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.newaccount} onPress={() => navigation.navigate("Connexion")}>
                    <Text style={styles.newaccounttext}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default SplashScreen