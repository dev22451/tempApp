import { StyleSheet } from "react-native";
import Color from "../../../Constants/Color";


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
        color: Color.secondary,
        opacity: 0.5,
    },
    text: {
        position: 'absolute',
        width: 176,
        height: 36,
        left: 40,
        top: 132,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 24,
        lineHeight: 36,
        color: Color.secondary,
    },
    text2: {
        position: "absolute",
        width: 133,
        height: 21,
        left: 40,
        top: 176,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 21,
        color: Color.secondary,
        opacity: 0.5
    },
    checkbox: {
        // position: "absolute",
        top: 508,
        left: 33,
        borderRadius: 0,

    },
    text3: {
        position: "absolute",
        top: 504,
        left: 76,
        width: 142,
        height: 27,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 27,
        color: Color.secondary,

    },
    btncontainer: {
        position: "absolute",
        height: 50,
        width: 345,
        left: 33,
        top: 702,
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