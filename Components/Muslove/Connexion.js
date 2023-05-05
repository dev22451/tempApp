import React, { useState, useRef } from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity, Pressable, Alert } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';

const Connexion = () => {
    const [phoneNumber, setphoneNumber] = useState('');
    const phoneInput = useRef(null);
    return (

        <View >
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
            <View style={styles.container}>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    placeholder='123456789'
                    defaultCode="FR"
                    layout="first"
                    withShadow
                    autoFocus
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textInput}
                    onChangeFormattedText={text => {
                        setphoneNumber(text);
                    }}
                />
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
        top: 120,
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        opacity: 50,
    },
    container: {

        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
        width: 295,
        height: 48,

    },
    phoneContainer: {
        top: 390,
        left: 55,
        width: 295,
        height: 48,
    },
    textInput: {
        paddingVertical: 0,
    },
    btncontainer: {
        height: 50,
        width: 282,
        left: 70,
        bottom: 256,
        top: 340,
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
        top: 350,
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
