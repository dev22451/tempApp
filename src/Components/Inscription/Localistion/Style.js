import { StyleSheet } from "react-native"
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
        width: 30,
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
        width: 147,
        height: 36,
        left: 40,
        top: 132,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 24,
        lineHeight: 36,
        color: Color.secondary
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
        color: Color.secondary,
        opacity: 0.5
    },

    img: {
        position: "absolute",
        height: 90,
        width: 74,
        left: 150,
        top: 266.67,
        backgroundColor: Color.primary
    },
    img1: {
        position: "absolute",
        height: 5,
        width: 53.33,
        left: 162,
        top: 362.67,
        backgroundColor: Color.primary,
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
        top: 700,
        backgroundColor: Color.primary,
        borderRadius: 10,

    },
    btntext: {
        color: Color.text,
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 24,
        textAlign: "center",
        top: 10,
    }
})

export default styles;