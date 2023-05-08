import React from 'react'
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './Style'
import { backArrow } from '../../Assets/Images/index/img'

const Profession = ({ navigation }) => {
    const physique = [
        {
            id: 0,
            title: "Management / Resources Humaines",
        },
        {
            id: 1,
            title: "Finance",
        },
        {
            id: 2,
            title: "Pub / Media / Communication",
        },
        {
            id: 3,
            title: "I.T / Communications",
        },
        {
            id: 4,
            title: "Commerçants",
        },
        {
            id: 5,
            title: "Construction",
        },
        {
            id: 6,
            title: "Profession libérale",
        },
        {
            id: 7,
            title: "Retraité",
        },
        {
            id: 8,
            title: "Admin / Service client",
        },
        {
            id: 9,
            title: "Fonctionnaires",
        },
        {
            id: 10,
            title: "Vente & Marketing",
        },
        {
            id: 11,
            title: "Education & Sciences",
        },
        {
            id: 12,
            title: "Légal / Droit",
        },
        {
            id: 13,
            title: "Santé / médical",
        },
        {
            id: 14,
            title: "Hôtellerie & Tourisme",
        },
        {
            id: 15,
            title: "Etudiant",
        },
        {
            id: 16,
            title: "Autre",
        },
    ];
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>
                <View style={styles.checkbox}>
                    <BouncyCheckbox
                        style={styles.checkbox1}
                        size={29}
                        fillColor="black"
                        unfillColor="#FFFFFF"
                    />
                </View>

                {title}</Text>
        </View>
    );
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("email")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("family")}>
                    <Text style={styles.skiptext}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>8/15</Text>
            <Text style={styles.text}>Profession</Text>
            <Text style={styles.text2}>Choisissez votre profession</Text>

            <View style={styles.list}>
                <FlatList
                    data={physique}

                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("family")} >
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Profession;