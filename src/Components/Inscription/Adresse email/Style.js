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
    skiptext: {
        position: "absolute",
        left: 335,
        top: 59,
        width: 30,
        height: 21,
        fontStyle: "normal",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        color: Color.primary,
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
        width: 175,
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
        width: 187,
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
    input: {
        left: 38,
        top: 271,
        width: 280,
        borderBottomWidth: 0.2,



    },
    inputtext: {
        fontSize: 20,
        top: 9,
    },
    btn: {
        position: "absolute",
        width: 345,
        height: 50,
        left: 33,
        top: 670,
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