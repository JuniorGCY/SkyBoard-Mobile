import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
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

            <View style={styles.cardDetails}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.cardTexts}>Horario de Inicio: {"\n"}20: 01: 59</Text>
                    <Text style={styles.cardTexts}>Elevação: {"\n"}10.0 - 35.1</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.cardTexts}>Duração {"\n"}1m</Text>
                    <Text style={styles.cardTexts}>Magnitude {"\n"}-1.0</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                   <Text style={styles.cardTexts}>Hora final: {"\n"}20: 02: 59</Text>
                </View>

                
            </View>

            <View style={styles.issMap}>

            </View>

            <View style={styles.cardDetails2}>
                <Text style={styles.cardTexts}>Latitude {"\n"} 17.0043</Text>
                <Text style={styles.cardTexts}>Longitude {"\n"} -9.5454</Text>
                <Text style={styles.cardTexts}>Altitude {"\n"} 425 km</Text>
                <Text style={styles.cardTexts}>Elevação {"\n"} -21.8</Text>
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
    cardDetails: {
        width: '95%',
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: RFValue(20),
        paddingVertical: RFValue(5),
        paddingHorizontal: RFValue(10),
        borderWidth: 0.8,
        borderColor: '#fff',
        borderRadius: 10
    },
    cardTexts: {
        color: '#fff',
        marginTop: RFValue(5),
        fontSize: RFValue(13)
    },
    issMap: {
        width: '95%',
        height: 200,
        marginTop: RFValue(20),
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10
    },
    cardDetails2: {
        width: '95%',
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: RFValue(20),
        paddingVertical: RFValue(5),
        paddingHorizontal: RFValue(10),
        borderWidth: 0.8,
        borderColor: '#fff',
        borderRadius: 10
    }
    
})