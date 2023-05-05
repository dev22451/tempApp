import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native'

const DateBirth = () => {
    return (
        <View>
            <Text style={styles.no}>3/15</Text>
            <Text style={styles.text}>Date de naissance</Text>
            <Text style={styles.text2}>Entrez votre date de naissance</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputtext} placeholder='05/02/1991'> </TextInput>
            </View>
            <View >
                <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Continuer</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    no: {
        position: "absolute",
        width: 30,
        height: 21,
        left: 43,
        top: 103,
        fontFamily: "Poppins",
        fontWeight: 600,
        lineHeight: 21,
        fontSize: 14,
        fontStyle: "normal",
        color: "#333453",
        opacity: 0.5,
    },
    text: {
        position: 'absolute',
        width: 227,
        height: 36,
        left: 40,
        top: 132,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 24,
        lineHeight: 36,
        color: "#333453"
    },
    text2: {
        position: "absolute",
        width: 217,
        height: 21,
        left: 40,
        top: 176,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 21,
        color: "#333453",
        opacity: 0.5
    },
    input: {
        left: 38,
        top: 271,
        width: 280,
        borderBottomWidth: 0.15,


    },
    inputtext: {
        fontSize: 20,
        top: 9,
        color: "black"

    },
    btn: {
        position: "absolute",
        width: 345,
        height: 50,
        left: 27,
        top: 650,
        backgroundColor: "#00BEAD",
        borderRadius: 10,
    },
    btntext: {
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        textAlign: "center",
        top: 10,
    }
})
export default DateBirth