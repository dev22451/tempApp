import { StyleSheet } from "react-native";
import Color from "../../Constants/Color";
const styles = StyleSheet.create({
    backtext: {
        position: "absolute",
        left: 52,
        top: 59,
        width: 35,
        height: 21,
        fontStyle: "normal",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        color: Color.primary,
    },
    backArrow: {
        position: "absolute",
        width: 17,
        height: 18,
        left: 29.92,
        top: 60.83,
    },
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
        color: Color.secondary,
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
        color: Color.secondary,
        opacity: 0.5

    },
    otp: {
        position: "absolute",
        top: 215,
        left: 40,
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    cellRoot: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cellText: {
        top: 3,
        color: Color.secondary,
        fontSize: 30,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: Color.primary,
        borderBottomWidth: 2,
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
        color: Color.primary,
    },
    btncontainer: {
        position: "absolute",
        height: 50,
        width: 345,
        left: 33,
        bottom: 256,
        top: 457,
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




})

export default styles;