import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import styles from './Style'
import { backArrow } from '../../Assets/Images/index/img'

const CELL_COUNT = 6;
const MonCode = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

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

            <View style={styles.otp}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}>
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
            </View>
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

