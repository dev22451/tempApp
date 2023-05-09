import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import styles from './Style'
import { Vector, card, filter, Menu, Notification, Profile, Chat, like, file, cancel } from '../../../Assets/Images/index/img'


const Superlike = ({ }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={card}
                resizeMode="cover" style={styles.image}>
                <Image source={filter} style={styles.img1} />
                <View style={styles.box}>
                    <Text style={styles.boxtext}>2.5km</Text>
                </View>

                <Text style={styles.heading}>Christina Bob, 23</Text>
                <View style={styles.smalllike}>
                    <Image source={like} style={styles.like} />
                </View>
                <Text style={styles.text}>chercher quelqu'un</Text>

                <View style={styles.stikerContainer3}>
                    <Image source={cancel} style={styles.stiker3} />
                </View>
                <View style={styles.stikerContainer}>
                    <Image source={Vector} style={styles.stiker} />
                </View>
                <View style={styles.stikerContainer1}>
                    <Image source={like} style={styles.stiker1} />
                </View>
                <View style={styles.stikerContainer2}>
                    <Image source={file} style={styles.stiker2} />
                </View>
            </ImageBackground>
            <View style={styles.menuContainer}>
                <Image source={Menu} style={styles.Menu} />
                <Image source={Chat} style={styles.Chat} />
                <Image source={Notification} style={styles.Notification} />
                <Image source={Profile} style={styles.Profile} />
            </View>
        </View>
    )
}

export default Superlike