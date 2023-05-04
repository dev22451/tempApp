import React, { useState, useRef } from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity, Pressable, Alert } from 'react-native'


const Connexion = () => {

    return (
        <View style={styles.container1}>
            <View style={styles.img}>
                <Image source={require("../Muslove/Assests/secondpagelogo.png")}
                    style={styles.logo}
                />
                <Image source={require("../Muslove/Assests/secondpage.png")}
                    style={styles.textlogo}
                />
            </View>
            <View>
                <Text style={styles.text1}>Connexion</Text>
                <Text style={styles.text2}>Welcome to Muslove</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.btncontainer}>
                    <Text style={styles.btn}>Continuer</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.footer1}>Vous n'avez pas de compte ?</Text>
                    <Text style={styles.footer2}>Inscription</Text>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container1: {
        width: "100%",
        height: "100%",
    },

    logo: {
        width: 93,
        height: 90,
        left: 150,
        top: 84,
    },
    textlogo: {
        height: 47,
        width: 131,
        left: 135,
        top: 90,
    },
    text1: {
        height: 36,
        width: 132,
        left: 140,
        top: 115,
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 36,
    },
    text2: {
        height: 21,
        width: 147,
        left: 140,
        top: 117,
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        opacity: 50,
    },
    container: {
        left: 40,
        top: 200,
    },
    phoneContainer: {
        width: 295,
        height: 48,
    },
    btncontainer: {
        height: 50,
        width: 282,
        left: 70,
        bottom: 256,
        top: 350,
        padding: 10,
        backgroundColor: "#00BEAD",
        borderRadius: 10,

    },
    btn: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 600,
        fontStyle: "normal",
        lineHeight: 24,
        color: "#FFFFFF",
        textAlign: "center",


    },
    footer: {
        flexDirection: "row",
        left: 70,
        top: 360,
    },
    footer1: {
        width: 206,
        height: 21,
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 500,
        fontStyle: "normal",
        lineHeight: 21,
        color: "#333453",
        opacity: 0.5,
    },
    footer2: {

        width: 76,
        height: 21,
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 500,
        fontStyle: "normal",
        lineHeight: 21,
        color: "#00BEAD",
    },
})
export default Connexion
