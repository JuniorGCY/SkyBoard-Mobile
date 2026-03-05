import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BlurView } from "expo-blur";

import { onGoogleButtonPress } from "../../services/GoogleAuth";

export default function AuthScreen() {

    const [user, setUser] = useState(null)

    const handleGoogleLogin = async () => {
        try {
            const userData = await onGoogleButtonPress()
            if (userData) {
                setUser(userData)
                console.log("Sucesso")
            }
        } catch (error) {
            console.log("Falha ao autenticar")
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
               source={require('../../assets/AuthImage/Moon_Wallpaper.jpg')}
               resizeMode="cover"
               style={styles.imageContainer}
            >

                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>SkyBoard</Text>
                </View>

                <BlurView style={styles.cardContainer} intensity={80} tint="dark">
                    <Text style={{fontSize: RFValue(20), color: 'white', fontWeight: 'bold', fontFamily: 'cochin', textAlign: 'center', marginTop: 20}}>
                        Crie ou faça login com seu provedor favorito
                    </Text>

                    <TouchableOpacity style={styles.buttonAuth} onPress={() => handleGoogleLogin()}>
                        <Image 
                           source={require('../../assets/AuthImage/google-icon.png')}
                           style={styles.googleIcon}
                        />
                        <Text style={styles.buttonText}>Continuar com o Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAuth}>
                        <Image 
                           source={require('../../assets/AuthImage/apple-icon-png.png')}
                           style={styles.googleIcon}
                        />
                        <Text style={styles.buttonText}>Em breve...</Text>
                    </TouchableOpacity>

                    <View style={styles.footerView}>
                        <Text style={{color: 'white', fontSize: RFValue(16)}}>v0.1</Text>
                        <Text style={{color: 'white', fontSize: RFValue(16)}}>Aplicativo em beta</Text>
                    </View>
                    
                </BlurView>
                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1
    },
    headerContainer: {
        marginTop: RFValue(40),
        marginStart: RFValue(20)
    },
    titleText: {
        color: 'white',
        fontSize: RFValue(24),
        fontWeight: 'bold'
    },
    cardContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    buttonAuth: {
        width: '90%',
        minHeight: 40,
        height: 50,
        maxHeight: 70,
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#161616',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 12
    },
    buttonText: {
        color: 'white', 
        fontSize: RFValue(16)
    },
    googleIcon: {
        width: 30,
        height: 30,
        marginHorizontal: 10
    },
    footerView: {
        width: '100%',
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})