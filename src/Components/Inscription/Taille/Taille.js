import React from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";

import styles from "./Style";
import { backArrow } from "../../../Assets/Images/index/img";


const Taille = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("physique")}>
                <Image source={backArrow} style={styles.backArrow} />
                <Text style={styles.backtext}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("enfant")}>
                <Text style={styles.skiptext}>Skip</Text>
            </TouchableOpacity>
            <Text style={styles.no}>12/15</Text>
            <Text style={styles.text}>Taille</Text>
            <Text style={styles.text2}>Entrez votre taille</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputtext} placeholder='180        cm'> </TextInput>
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("enfant")} >
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Taille