import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Nationalite = () => {

    const City = [
        {
            id: 0,
            title: "Algérienne",
        },
        {
            id: 1,
            title: "Marocaine",
        },
        {
            id: 2,
            title: "Tunisienne",
        },
        {
            id: 3,
            title: "Autre",
        },
    ];
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>
                <View style={styles.checkbox}>
                    <BouncyCheckbox
                        style={styles.checkbox1}
                        size={30}
                        fillColor="black"
                        unfillColor="#FFFFFF"
                    />
                </View>

                {title}</Text>
        </View>
    );
    return (
        <View>
            <Text style={styles.no}>4/15</Text>
            <Text style={styles.text}>Nationalité</Text>
            <Text style={styles.text2}>Choisis ton pays</Text>
            <View style={styles.list}>
                <FlatList
                    data={City}

                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View >
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
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
    text: {
        position: 'absolute',
        width: 135,
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
        width: 117,
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
    list: {
        position: "absolute",
        left: 35,
        top: 237,

    },
    title: {
        marginVertical: 24,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 27,
        color: "#333453"
    },
    checkbox1: {
        top: 9,
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
export default Nationalite;