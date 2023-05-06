import { StyleSheet } from "react-native"
import Color from "../../Constants/Color";

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
        backgroundColor: Color.primary,
        borderRadius: 10,

    },
    btn: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 600,
        fontStyle: "normal",
        lineHeight: 24,
        color: Color.text,
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
        color: Color.secondary,
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
        color: Color.primary,
    },
})

export default styles;