import React from 'react'
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { backArrow } from '../../Assets/Images/index/img'
import styles from './Style';

const Physique = ({ navigation }) => {
    const physique = [
        {
            id: 0,
            title: "Mince",
        },
        {
            id: 1,
            title: "Musclé",
        },
        {
            id: 2,
            title: "Normal",
        },
        {
            id: 3,
            title: "Quelques formes",
        },
        {
            id: 4,
            title: "Enrobé",
        },
        {
            id: 5,
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
                <TouchableOpacity onPress={() => navigation.navigate("pratiquant")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("taille")}>
                    <Text style={styles.skiptext}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>11/15</Text>
            <Text style={styles.text}>Physique</Text>
            <Text style={styles.text2}>Choisissez votre physique</Text>
            <View style={styles.list}>
                <FlatList
                    data={physique}

                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("taille")} >
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Physique;