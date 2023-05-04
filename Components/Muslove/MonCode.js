import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const MonCode = () => {
    return (
        <View>
            <View>
                <Text>Mon Code</Text>
                <Text>Rentrer le code à 6 chiffres reçu par SMS.</Text>
            </View>
            <Text style={styles.textotp}>Renvoyer le code</Text>
            <View>
                <TouchableOpacity style={styles.btncontainer}>
                    <Text style={styles.btn}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    textotp: {
        top: 270,
        left: 40,
        width: 121,
        height: 21,
        fontFamily: "Poppins",
        // fontWeight: 500,
        fontSize: 14,
        lineHeight: 21,
        color: "#00BEAD",
    },
    btncontainer: {
        height: 50,
        width: 282,
        left: 70,
        bottom: 256,
        top: 457,
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
})
export default MonCode