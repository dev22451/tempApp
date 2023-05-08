import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { backArrow } from "../../Assets/Images/index/img";
import styles from "./Style";


const ProfilePhoto = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("location")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>6/15</Text>
            <Text style={styles.text}>Photo de profil</Text>
            <Text style={styles.text2}>Ajoutez vos photos</Text>
            <View>
                <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate("email")}>
                    <Text style={styles.btn}>Continuer</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProfilePhoto