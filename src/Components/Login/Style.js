import { StyleSheet } from "react-native";
import Color from "../../Constants/Color";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: Color.primary
    },
    heading: {
        position: "absolute",
        top: 200,
        fontSize: 40,
        left: 137
    },
    form: {
        position: "absolute",
        top: 280,
        left: 46,
    },
    input: {
        width: 300,
        height: 45,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 8,
        fontSize: 18,
        paddingHorizontal: 25,
    },
    input1: {
        width: 300,
        height: 45,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        fontSize: 18,
        paddingHorizontal: 25,

    },
    btn: {
        top: 20,
        borderWidth: 2,
        borderRadius: 10,
        width: 300,
        height: 40,
    },
    btntext: {
        top: 3,
        fontSize: 18,
        textAlign: "center"
    },
    pass: {
        top: 30,
        left: 167,
        fontSize: 16,
    }

})

export default styles;