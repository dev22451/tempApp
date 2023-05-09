import React from "react";
import { View, TouchableOpacity, Text, Image, Button } from "react-native";
import styles from "./Style";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ImagePicker from 'react-native-image-picker';
import { backArrow } from "../../../Assets/Images/index/img";



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
                <BouncyCheckbox style={styles.checkbox} innerIconStyle={{ borderWidth: 2, borderRadius: 0 }} size={20} />
                <Text style={styles.text3}>
                    Flouter la photo
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate("email")}>
                    <Text style={styles.btn}>Continuer</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProfilePhoto