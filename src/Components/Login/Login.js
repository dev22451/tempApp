import React from "react";
import { TextInput, View, Button, Text, TouchableOpacity } from "react-native";
import styles from './Style'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.form}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="email address or username"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input1}
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("accueil")}>
                        <Text style={styles.btntext}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.pass}>Forgot Password ?</Text>
            </View>

        </View>
    );
};

export default Login;
