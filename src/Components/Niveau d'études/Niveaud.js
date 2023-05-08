import React from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { backArrow } from "../../Assets/Images/index/img";
import styles from "./Style";

const Niveaud = ({ navigation }) => {
    const niveaud = [
        {
            id: 0,
            title: "Niveau lycée et inférieur",
        },
        {
            id: 1,
            title: "Bac",
        },
        {
            id: 2,
            title: "Bac +2",
        },
        {
            id: 3,
            title: "Bac +3",
        },
        {
            id: 4,
            title: "Bac +4",
        },
        {
            id: 5,
            title: "Bac +5 et plus",
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
            <TouchableOpacity onPress={() => navigation.navigate("enfant")}>
                <Image source={backArrow} style={styles.backArrow} />
                <Text style={styles.backtext}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("choix")}>
                <Text style={styles.skiptext}>Skip</Text>
            </TouchableOpacity>
            <Text style={styles.no}>14/15</Text>
            <Text style={styles.text}>Niveau d'études</Text>
            <Text style={styles.text2}>Choisissez votre niveau d'études</Text>
            <View style={styles.list}>
                <FlatList
                    data={niveaud}

                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("choix")} >
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Niveaud;