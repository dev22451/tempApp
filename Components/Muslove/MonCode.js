import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const MonCode = () => {

    return (
        <View>
            <View>
                <Text style={styles.heading}>Mon Code</Text>
                <Text style={styles.headingtext}>Rentrer le code à 6 chiffres reçu par SMS.</Text>
            </View>
            <TextInput
                style={styles.inputBox}
                keyboardType="number-pad"
                maxLength={1}

            />
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
    heading: {
        position: "absolute",
        height: 36,
        width: 124,
        left: 40,
        top: 103,
        fontStyle: "normal",
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 36,
        color: "#333453"
    },
    headingtext: {
        position: "absolute",
        width: 287,
        height: 21,
        left: 40,
        top: 147,
        fontStyle: "normal",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        color: "#333453",
        opacity: 0.5

    },
    inputBox: {
        position: "absolute",
        width: 30,
        height: 50,
        left: 40,
        top: 210,
        borderBottomWidth: 2
    },
    textotp: {
        position: "absolute",
        top: 290,
        left: 40,
        width: 121,
        height: 21,
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 21,
        color: "#00BEAD",
    },
    btncontainer: {
        position: "absolute",
        height: 50,
        width: 345,
        left: 33,
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

