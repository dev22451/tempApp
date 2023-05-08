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
import ProfilePhoto from "../Components/Photo de profile/ProfilePhoto";
import Adresseemail from "../Components/Adresse email/Adresseemail";
import Profession from "../Components/Profession/Profession";
import SituationFamiliale from "../Components/SituationFamiliale/SituationFamiliale";
import Pratiquant from "../Components/Pratiquant/Pratiquant";
import Physique from "../Components/Physique/Physique";
import Taille from "../Components/Taille/Taille";
import Enfant from "../Components/Enfant/Enfant";
import Niveaud from "../Components/Niveau d'études/Niveaud";
import Choix from "../Components/Choix de l'abonnement/Choix";


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
                <Stack.Screen options={{ headerShown: false }} name="profile" component={ProfilePhoto} />
                <Stack.Screen options={{ headerShown: false }} name="email" component={Adresseemail} />
                <Stack.Screen options={{ headerShown: false }} name="profession" component={Profession} />
                <Stack.Screen options={{ headerShown: false }} name="family" component={SituationFamiliale} />
                <Stack.Screen options={{ headerShown: false }} name="pratiquant" component={Pratiquant} />
                <Stack.Screen options={{ headerShown: false }} name="physique" component={Physique} />
                <Stack.Screen options={{ headerShown: false }} name="taille" component={Taille} />
                <Stack.Screen options={{ headerShown: false }} name="enfant" component={Enfant} />
                <Stack.Screen options={{ headerShown: false }} name="niveaud" component={Niveaud} />
                <Stack.Screen options={{ headerShown: false }} name="choix" component={Choix} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;