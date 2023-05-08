import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import styles from './Style'
import { location, ellipseImage, backArrow } from '../../Assets/Images/index/img'


const Localistion = ({ navigation }) => {
    return (
        <View>
            <View >
                <TouchableOpacity onPress={() => navigation.navigate("national")}>
                    <Image source={backArrow} style={styles.backArrow} />
                    <Text style={styles.backtext} > Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.no}>5/15</Text>
            <Text style={styles.text}>Localisation</Text>
            <Text style={styles.text2}>Localisation automatique de l'utilisateur</Text>
            <View>
                <Image style={styles.img} source={location} ></Image>
                <View style={styles.containerimg}>
                    <Image style={styles.img1} source={ellipseImage} />
                </View>
                <Text style={styles.text3}>Demander à utiliser votre position</Text>
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("profile")}>
                    <Text style={styles.btntext}>Autoriser la localisation</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


export default Localistion;