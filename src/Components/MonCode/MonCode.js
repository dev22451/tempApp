import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './Style'
import { backArrow } from '../../Assets/Images/index/img'
const MonCode = ({ navigation }) => {

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.heading}>Mon Code</Text>
                <Text style={styles.headingtext}>Rentrer le code à 6 chiffres reçu par SMS.</Text>
            </View>
            <TextInput
                style={styles.inputBox}
                keyboardType="number-pad"
                maxLength={1}

            />

            <Text style={styles.textotp}>Renvoyer le code</Text>
            <View>
                <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate("prenom")}>
                    <Text style={styles.btn}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default MonCode

