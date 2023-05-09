import { StyleSheet } from "react-native";
import Color from "../../../Constants/Color";


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 12,
        right: 12,
        top: 44,
        bottom: 82,
        borderRadius: 12,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    img1: {
        position: "absolute",
        top: 17.67,
        left: 345,
        width: 26.67,
        height: 26.67,
    },
    box: {
        position: "absolute",
        top: 489,
        left: 17,
        width: 56,
        height: 33,
        backgroundColor: Color.text,
        borderRadius: 6,
    },
    boxtext: {
        width: 50,
        height: 25,
        top: 5,
        left: 3,
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        color: Color.secondary
    },
    heading: {
        position: "absolute",
        top: 534,
        left: 17,
        width: 171,
        height: 30,
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 20,
        lineHeight: 30,
        textAlign: "center",
        color: Color.text

    },
    text: {
        position: "absolute",
        top: 568,
        left: 21,
        width: 136,
        height: 21,
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        color: Color.text
    },
    smalllike: {
        position: "absolute",
        width: 28,
        height: 28,
        top: 535,
        left: 200,
        backgroundColor: "#FF69B4",
        borderRadius: 50
    },
    like: {
        width: 18.05,
        height: 15.66,
        top: 5,
        left: 5,
    },
    stikerContainer: {
        position: "absolute",
        width: 52,
        height: 52,
        backgroundColor: Color.primary,
        left: 116,
        top: 609,
        borderRadius: 50

    },
    stiker: {
        position: "absolute",
        width: 30,
        height: 28.5,
        left: 11,
        top: 12,
    },
    stikerContainer1: {
        position: "absolute",
        width: 52,
        height: 52,
        backgroundColor: Color.primary,
        left: 205,
        top: 609,
        borderRadius: 50

    },
    stiker1: {
        position: "absolute",
        width: 33.51,
        height: 29.08,
        left: 10,
        top: 9,
    },
    stikerContainer2: {
        position: "absolute",
        width: 52,
        height: 52,
        backgroundColor: Color.primary,
        left: 298,
        top: 609,
        borderRadius: 50

    },
    stiker2: {
        position: "absolute",
        width: 13.89,
        height: 27.97,
        left: 19,
        top: 14,
    },
    stikerContainer3: {
        position: "absolute",
        width: 52,
        height: 52,
        backgroundColor: Color.primary,
        left: 29,
        top: 609,
        borderRadius: 50

    },
    stiker3: {
        position: "absolute",
        width: 36,
        height: 36,
        left: 8.4,
        top: 8.6,
    },
    menuContainer: {
        flexDirection: "row",
        position: "absolute",
        top: 712.67,
    },
    Menu: {
        position: "absolute",
        width: 25.33,
        height: 26.67,
        left: 43.33
    },
    Chat: {
        position: "absolute",
        width: 26.67,
        height: 26.67,
        left: 130.33
    },
    Notification: {
        position: "absolute",
        width: 22.67,
        height: 28.67,
        left: 220
    },
    Profile: {
        position: "absolute",
        width: 21.33,
        height: 25.67,
        left: 308.33
    }



})
export default styles;