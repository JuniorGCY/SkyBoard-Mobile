import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export default function IssDetailsScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                   <Feather name="arrow-left" size={32} color="#FFFFFF"/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Iss Tracking</Text>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: "column", marginTop: RFValue(30)}}>
               <Text style={{color: '#fff', fontSize: RFValue(16)}}>Se prepare! Iss visivel em:</Text>
               <Text style={{color: '#fff', fontSize: RFValue(16)}}>1h 30m 1s</Text>
            </View>

            <View style={styles.detailsCard}>
                <View>
                    <Text>Horario de Inicio: 20: 01: 59</Text>
                </View>
            </View>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    header: {
        width: '100%',
        minHeight: 40,
        height: 60,
        maxHeight: 70,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingStart: RFValue(10),
        borderColor: '#FFFFFF',
        borderWidth: 0.7
    },
    headerTitle: {
        color: '#fff',
        fontSize: RFValue(20),
        fontWeight: 'bold',
        marginStart: RFValue(20)
    },
    detailsCard: {

    }
})