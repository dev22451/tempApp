import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Sexe = () => {
    return (
        <View>
            <Text style={styles.no}>2/15</Text>
            <Text style={styles.heading}>Sexe</Text>

            <TouchableOpacity style={styles.btn1}>
                <Text style={styles.btntext1}>Man</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.btntext2}>Woman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>Continuer</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    no: {
        position: "absolute",
        width: 32,
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
    heading: {
        position: "absolute",
        width: 58,
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
    btn1: {
        position: "absolute",
        width: 295,
        height: 50,
        left: 43,
        top: 208,
        borderColor: "#00BEAD",
        borderWidth: 1,
        borderRadius: 10,
    },
    btntext1: {

        textAlign: "center",
        fontFamily: "Poppins",
        fontWeight: 600,
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
        color: "#00BEAD",
        top: 10,

    },
    btn2: {
        position: "absolute",
        width: 295,
        height: 50,
        left: 44,
        top: 269,
        borderColor: "#00BEAD",
        borderWidth: 1,
        borderRadius: 10,
    },
    btntext2: {
        textAlign: "center",
        fontFamily: "Poppins",
        fontWeight: 600,
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
        color: "#00BEAD",
        top: 10,
    },
    btn: {
        position: "absolute",
        width: 345,
        height: 50,
        left: 27,
        top: 722,
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
export default Sexe