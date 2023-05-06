import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../Components/SplashScreen/SplashScreen";
import Connexion from "../Components/Connexion/Connexion";
import MonCode from "../Components/MonCode/MonCode";
import Prenom from "../Components/Prenom/Prenom";
import Sexe from "../Components/Sexe/Sexe";
import DateBirth from "../Components/Date de naissance/DateBirth";
import Nationalite from "../Components/Nationalite/Nationalite";
import Localistion from "../Components/Localistion/Localistion";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} name="Home" component={SplashScreen} />
                <Stack.Screen name="Connexion" component={Connexion} />
                <Stack.Screen options={{ headerShown: false }} name="MonCode" component={MonCode} />
                <Stack.Screen options={{ headerShown: false }} name="prenom" component={Prenom} />
                <Stack.Screen options={{ headerShown: false }} name="sexe" component={Sexe} />
                <Stack.Screen options={{ headerShown: false }} name="birth" component={DateBirth} />
                <Stack.Screen options={{ headerShown: false }} name="national" component={Nationalite} />
                <Stack.Screen options={{ headerShown: false }} name="location" component={Localistion} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;