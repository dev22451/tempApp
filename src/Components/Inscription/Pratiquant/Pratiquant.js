import React from 'react'
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

import styles from './Style';
import { backArrow } from '../../../Assets/Images/index/img';

const Pratiquant = ({ navigation }) => {
    const pratiquant = [
        {
            id: 0,
            title: "Oui",
        },
        {
            id: 1,
            title: "Non",
        },
        {
            id: 2,
            title: "Modéré",
        },
        {
            id: 3,
            title: "Dans le Din",
        },
        {
            id: 4,
            title: "Converti",
        },
    ];
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>
                <View style={styles.checkbox}>
                    <BouncyCheckbox
                        style={styles.checkbox1}
                        size={28}
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
                <TouchableOpacity onPress={() => navigation.navigate("family")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("physique")}>
                    <Text style={styles.skiptext}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>10/15</Text>
            <Text style={styles.text}>Pratiquant</Text>
            <Text style={styles.text2}>Choisissez votre pratiquant</Text>
            <View style={styles.list}>
                <FlatList
                    data={pratiquant}

                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("physique")} >
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Pratiquant;