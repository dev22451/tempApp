import React, { useState, useRef } from 'react'
import { Image, View, Text, TouchableOpacity, } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';
import styles from './Style';
import { secondpageLogo, secondpageText } from '../../Assets/Images/index/img';

const Connexion = ({ navigation }) => {
    const [phoneNumber, setphoneNumber] = useState('');
    const phoneInput = useRef(null);
    return (

        <View >
            <View style={styles.img}>
                <Image source={secondpageLogo}
                    style={styles.logo}
                />
                <Image source={secondpageText}
                    style={styles.textlogo}
                />
            </View>
            <View>
                <Text style={styles.text1}>Connexion</Text>
                <Text style={styles.text2}>Welcome to Muslove</Text>
            </View>
            <View style={styles.container}>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    placeholder='123456789'
                    defaultCode="FR"
                    layout="first"
                    withShadow
                    autoFocus
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textInput}
                    onChangeFormattedText={text => {
                        setphoneNumber(text);
                    }}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate("MonCode")} >
                    <Text style={styles.btn}>Continuer</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.footer1}>Vous n'avez pas de compte ?</Text>
                    <Text style={styles.footer2}>Inscription</Text>
                </View>
            </View>

        </View>
    )
}

export default Connexion
