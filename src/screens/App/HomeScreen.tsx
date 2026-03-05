import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { getAuth } from "@react-native-firebase/auth";

export default function HomeScreen({navigation}) {

    const handleSignOut = async () => {
        const auth = getAuth()
        await auth.signOut()
        await GoogleSignin.signOut()
    }

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>Deslogar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {

    }
})