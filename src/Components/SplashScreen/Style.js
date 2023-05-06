import { StyleSheet } from "react-native"
import Color from "../../Constants/Color";

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: Color.primary,
    },
    logo: {
        position: "absolute",
        width: 173,
        height: 173,
        left: 120,
        top: 201,
    },
    text: {
        position: "absolute",
        width: 156,
        height: 40,
        left: 130,
        top: 374,

    },
    login: {
        position: "absolute",
        width: 156,
        height: 40,
        left: 170,
        top: 650,

    },
    logintext: {
        fontSize: 24,
    },
    newaccount: {
        position: "absolute",
        width: 230,
        height: 40,
        left: 100,
        top: 710,
    },
    newaccounttext: {
        fontSize: 24,
    }
})

export default styles;