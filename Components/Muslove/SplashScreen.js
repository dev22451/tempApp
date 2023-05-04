import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image source={require("../Muslove/Assests/muslovefirstpage.png")}
                    style={styles.logo} />
                <Image source={require("../Muslove/Assests/firstpage.png")}
                    style={styles.text}
                />
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.logintext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.newaccount}>
                    <Text style={styles.newaccounttext}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#00BEAD",
    },
    logo: {
        position: "absolute",
        width: 173,
        height: 173,
        left: 120,
        top: 201,
    },
    text: {
        position: "absolute",
        width: 156,
        height: 40,
        left: 130,
        top: 374,

    },
    login: {
        position: "absolute",
        width: 156,
        height: 40,
        left: 170,
        top: 650,

    },
    logintext: {
        fontSize: 24,
    },
    newaccount: {
        position: "absolute",
        width: 230,
        height: 40,
        left: 100,
        top: 710,
    },
    newaccounttext: {
        fontSize: 24,
    }
})
export default SplashScreen