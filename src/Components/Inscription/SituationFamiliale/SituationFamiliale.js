import React from 'react'
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './Style'
import { backArrow } from '../../../Assets/Images/index/img';


const SituationFamiliale = ({ navigation }) => {
    const family = [
        {
            id: 0,
            title: "Jamais marié",
        },
        {
            id: 1,
            title: "Séparé",
        },
        {
            id: 2,
            title: "Divorcé",
        },
        {
            id: 3,
            title: "Veuf",
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
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("profession")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("pratiquant")}>
                    <Text style={styles.skiptext}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>9/15</Text>
            <Text style={styles.text}>Situation Familiale</Text>
            <Text style={styles.text2}>Choisissez votre situation familiale</Text>
            <View style={styles.list}>
                <FlatList
                    data={family}

                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("pratiquant")} >
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default SituationFamiliale;