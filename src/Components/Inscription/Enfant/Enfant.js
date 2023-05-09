import React from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./Style";
import { backArrow } from "../../../Assets/Images/index/img";


const Enfant = ({ navigation }) => {
    const enfant = [
        {
            id: 0,
            title: "Oui et ils vivent à la maison",
        },
        {
            id: 1,
            title: "Oui parfois ils vivent à la maison",
        },
        {
            id: 2,
            title: "Non",
        },
        {
            id: 3,
            title: "Oui et ils n'habitent plus à la maison",
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
            <TouchableOpacity onPress={() => navigation.navigate("taille")}>
                <Image source={backArrow} style={styles.backArrow} />
                <Text style={styles.backtext}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("niveaud")}>
                <Text style={styles.skiptext}>Skip</Text>
            </TouchableOpacity>
            <Text style={styles.no}>13/15</Text>
            <Text style={styles.text}>Enfant</Text>
            <Text style={styles.text2}>Choisissez votre enfant</Text>
            <View style={styles.list}>
                <FlatList
                    data={enfant}

                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("niveaud")} >
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Enfant;