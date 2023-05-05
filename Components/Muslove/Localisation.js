import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'


const Localistion = () => {
    return (
        <View>
            <Text style={styles.no}>5/15</Text>
            <Text style={styles.text}>Localisation</Text>
            <Text style={styles.text2}>Localisation automatique de l'utilisateur</Text>
            <View>
                <Image style={styles.img} source={require("../Muslove/Assests/location.jpg")} ></Image>
                <View style={styles.containerimg}>
                    <Image style={styles.img1} source={require("../Muslove/Assests/down.png")} />
                </View>
                <Text style={styles.text3}>Demander à utiliser votre position</Text>
            </View>
            <View >
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Autoriser la localisation</Text>
                </TouchableOpacity>
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
        width: 147,
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
        width: 283,
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

    img: {
        position: "absolute",
        height: 90,
        width: 74,
        left: 150,
        top: 266.67,
        backgroundColor: "#00BEAD"
    },
    img1: {
        position: "absolute",
        height: 5,
        width: 53.33,
        left: 162,
        top: 362.67,
        backgroundColor: "#00BEAD",
        borderRadius: 50,
        opacity: 0.3
    },
    text3: {
        position: "absolute",
        width: 273,
        height: 24,
        left: 53,
        top: 394,
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 24,
        textAlign: "center",
        opacity: 0.8
    },
    btn: {
        position: "absolute",
        width: 345,
        height: 50,
        left: 26,
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
export default Localistion;