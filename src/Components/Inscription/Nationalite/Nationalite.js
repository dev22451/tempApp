import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './Style';
import { backArrow } from '../../../Assets/Images/index/img';




const Nationalite = ({ navigation }) => {

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
            <View >
                <TouchableOpacity onPress={() => navigation.navigate("birth")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("location")}>
                    <Text style={styles.skiptext}>Skip</Text>
                </TouchableOpacity>
            </View>
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
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("location")}>
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Nationalite;