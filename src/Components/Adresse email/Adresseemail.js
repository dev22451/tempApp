import React from 'react'
import { TouchableOpacity, View, Text, TextInput, Image } from 'react-native'
import styles from './Style'
import { backArrow } from '../../Assets/Images/index/img'

const Adresseemail = ({ navigation }) => {

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("profession")}>
                    <Text style={styles.skiptext}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>7/15</Text>
            <Text style={styles.text}>Adresse email</Text>
            <Text style={styles.text2}>Entrez votre adresse email</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputtext} placeholder='cypher@gmail.com'> </TextInput>
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("profession")} >
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Adresseemail;