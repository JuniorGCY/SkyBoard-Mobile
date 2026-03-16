import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { getAuth } from "@react-native-firebase/auth";

import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen() {
    const [userName, setUserName] = useState<string | null>(null)
    const [photoUser, setPhotoUser] = useState<string | null>(null)

    useEffect(() => {
        const auth = getAuth()
        const currentUser = auth.currentUser

        if (currentUser) {
            setPhotoUser(currentUser.photoURL)
            setUserName(currentUser.displayName)
        }
    }, [])

    const handleSignOut = async () => {
        const auth = getAuth()
        await auth.signOut()
        await GoogleSignin.signOut()
    }

    return (
        <LinearGradient 
            colors={['#020617', '#000000', '#000000']} 
            style={styles.container}
        >
            <View style={styles.header}>
                <Feather name="settings" size={RFValue(25)} color='white'/>
                <Feather name="inbox" size={RFValue(25)} color='white'/>
            </View>

            <View style={styles.userProfileView}>
                <Image 
                   source={photoUser ? {uri: photoUser} : require('../../assets/images/icon/icons/photoDefaultUser.png')}
                   contentFit="cover"
                   transition={500}
                   style={styles.userProfile}
                />

                {userName ? (
                    <Text style={styles.usernameText}>{userName}</Text>
                ) : (
                    <Text style={styles.usernameText}>Nome não encontrado</Text>
                )}

                <Text style={styles.userTag}>Nenhuma categoria adicionada</Text>
            </View>

            <Text style={{color: 'white', fontSize: RFValue(18), textAlign: 'center', opacity: 0.9}}>
                Em Breve - Seu proximo evento salvo
            </Text>

            <View style={styles.cardView}>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Image 
                       source={require('../../assets/images/AuthImage/Moon_Wallpaper.jpg')}
                       contentFit="cover"
                       style={{width: "100%", height: "100%"}} 
                       transition={500}
                    />
                </TouchableOpacity>
            </View>

            <Text style={{color: 'white', fontSize: RFValue(18), textAlign: 'center', opacity: 0.9}}> 
                Em Breve - Proximos Eventos
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop: RFValue(20), paddingHorizontal: RFValue(10)}}>
                <TouchableOpacity>
                    <View style={styles.cardView2}>
                        <Text style={{color: 'white', fontSize: RFValue(15), opacity: 0.8}}>Em Breve</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.cardView2}>
                        <Text style={{color: 'white', fontSize: RFValue(15), opacity: 0.8}}>Em Breve</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.cardView2}>
                        <Text style={{color: 'white', fontSize: RFValue(15), opacity: 0.8}}>Em Breve</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: RFValue(50),
        marginHorizontal: RFValue(25)
    },
    userProfileView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: RFValue(30),
        marginHorizontal: RFValue(25)
    },
    userProfile: {
        width: 100, 
        height: 100, 
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.1)'
    },
    usernameText: {
        color: 'white',
        fontSize: RFValue(20),
        fontWeight: 'bold',
        marginTop: RFValue(10)
    },
    userTag: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: RFValue(11),
        fontWeight: '500',
        marginTop: RFValue(2)
    },
    cardView: {
        width: '90%',
        height: 100,
        marginTop: RFValue(15),
        marginBottom: RFValue(25),
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)', 
        borderRadius: 12,
        overflow: 'hidden'
    },
    cardView2: {
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: RFValue(10),
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    cardEvents: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc'
    }
})