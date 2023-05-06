import React from 'react'
import { TouchableOpacity, View, Text, TextInput, Image } from 'react-native'
import styles from './Style'
import { backArrow } from '../../Assets/Images/index/img'

const DateBirth = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("sexe")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>3/15</Text>
            <Text style={styles.text}>Date de naissance</Text>
            <Text style={styles.text2}>Entrez votre date de naissance</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputtext} placeholder='05/02/1991'> </TextInput>
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("national")}>
                    <Text style={styles.btntext}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default DateBirth