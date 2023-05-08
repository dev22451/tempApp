import React from 'react'
import { TouchableOpacity, View, Text, TextInput, Image } from 'react-native'
import styles from './Style'
import { backArrow } from '../../Assets/Images/index/img'

const Prenom = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("MonCode")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>1/15</Text>
            <Text style={styles.text}>Prénom</Text>
            <Text style={styles.text2}>Entrez votre prénom</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputtext} placeholder='Cypher|'> </TextInput>
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("sexe")}>
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Prenom