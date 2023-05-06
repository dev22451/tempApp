import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Style'
import { backArrow } from '../../Assets/Images/index/img'

const Sexe = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("prenom")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>2/15</Text>
            <Text style={styles.heading}>Sexe</Text>

            <TouchableOpacity style={styles.btn1}>
                <Text style={styles.btntext1}>Man</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.btntext2}>Woman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("birth")}>
                <Text style={styles.btntext}>Continuer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Sexe