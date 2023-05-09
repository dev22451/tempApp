import React from "react";
import { View, TouchableOpacity, Text, Image, FlatList, SectionList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./Style";
import { backArrow } from "../../../Assets/Images/index/img";



const Choix = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("niveaud")}>
                <Image source={backArrow} style={styles.backArrow} />
                <Text style={styles.backtext}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.no}>15/15</Text>
            <Text style={styles.text}>Choix de l'abonnement</Text>
            <View style={styles.list}>
                <Text style={styles.heading}>Pass 6 mois</Text>
                <Text style={styles.data}>49,90 € (8,31 €/mois)</Text>
                <BouncyCheckbox style={styles.checkbox} />
            </View>
            <View style={styles.list1}>
                <Text style={styles.heading}>Pass 3 mois</Text>
                <Text style={styles.data} >29,90 € (9,96 €/mois)</Text>
                <BouncyCheckbox style={styles.checkbox} />
            </View>
            <View style={styles.list2}>
                <Text style={styles.heading}>Pass 1 mois</Text>
                <Text style={styles.data2} >14,90 €</Text>
                <BouncyCheckbox style={styles.checkbox} />
            </View>
            <View >
                <TouchableOpacity style={styles.btn} >
                    <Text style={styles.btntext}>Achevée</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Choix;