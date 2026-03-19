import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import * as satellite from 'satellite.js';

export default function IssDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { passData } = route.params as any; 

    const [liveData, setLiveData] = useState({ lat: '---', lng: '---', alt: '---' });
    const [calcError, setCalcError] = useState(false);
    const [countdown, setCountdown] = useState("Calculando...");

    useEffect(() => {
        let motorIntervalo: NodeJS.Timeout;

        async function ligarRadar() {
            try {
                const noradId = passData.id.split('-')[0];
                const apiKey = process.env.EXPO_PUBLIC_N2YO_API_KEY; 

                const response = await fetch(`https://api.n2yo.com/rest/v1/satellite/tle/${noradId}&apiKey=${apiKey}`);
                const data = await response.json();
                
                const tleLines = data.tle.split('\r\n');
                if (tleLines.length < 2) throw new Error("TLE inválido");

                const satrec = satellite.twoline2satrec(tleLines[0], tleLines[1]);

                motorIntervalo = setInterval(() => {
                    const now = new Date();
                    const startUTC = parseInt(passData.id.split('-')[1]); 
                    const dataAlvo = new Date(startUTC * 1000);
                    
                    const diferencaMs = dataAlvo.getTime() - now.getTime();

                    if (diferencaMs > 0) {
                        const horas = Math.floor(diferencaMs / (1000 * 60 * 60));
                        const minutos = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));
                        const segundos = Math.floor((diferencaMs % (1000 * 60)) / 1000);
                        
                        const h = String(horas).padStart(2, '0');
                        const m = String(minutos).padStart(2, '0');
                        const s = String(segundos).padStart(2, '0');
                        
                        setCountdown(`${h}h ${m}m ${s}s`);
                    } else if (diferencaMs > -(passData.duracaoMinutos * 60 * 1000)) {
                        setCountdown("🚀 PASSANDO AGORA!");
                    } else {
                        setCountdown("Passagem encerrada.");
                    }
                    const positionAndVelocity = satellite.propagate(satrec, now);
                    
                    if (!positionAndVelocity || !positionAndVelocity.position || typeof positionAndVelocity.position === 'boolean') {
                        setCalcError(true);
                        return;
                    }

                    const positionEci = positionAndVelocity.position;
                    const gmst = satellite.gstime(now);
                    const positionGd = satellite.eciToGeodetic(positionEci, gmst);

                    setLiveData({
                        lat: satellite.degreesLat(positionGd.latitude).toFixed(4),
                        lng: satellite.degreesLong(positionGd.longitude).toFixed(4),
                        alt: positionGd.height.toFixed(1)
                    });
                }, 1000);

            } catch (error) {
                console.error("Erro ao ligar o radar:", error);
                setCalcError(true);
            }
        }
        ligarRadar();
        return () => clearInterval(motorIntervalo);
    }, [passData]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                   <Feather name="arrow-left" size={32} color="#FFFFFF"/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{passData.satelite} Tracking</Text>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: "column", marginTop: RFValue(30)}}>
               <Text style={{color: '#fff', fontSize: RFValue(16)}}>Se prepare! Visível em:</Text>
               <Text style={{color: '#fff', fontSize: RFValue(16)}}>{countdown}</Text>
            </View>

            <View style={styles.cardDetails}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.cardTexts}>Horário de Início: {"\n"}{passData.horaInicio}</Text>
                    <Text style={styles.cardTexts}>Elevação Máx: {"\n"}{passData.elevacao}°</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.cardTexts}>Duração {"\n"}{passData.duracaoMinutos} min</Text>
                    <Text style={styles.cardTexts}>Magnitude {"\n"}{passData.magnitude}</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                   <Text style={styles.cardTexts}>Hora final: {"\n"}{passData.horaFim}</Text>
                </View>
            </View>

            <View style={styles.issMap}>
                
            </View>

            <View style={styles.cardDetails2}>
                {calcError ? (
                    <Text style={[styles.cardTexts, { color: 'red' }]}>Erro de Telemetria</Text>
                ) : liveData.lat === '---' ? (
                    <ActivityIndicator size="small" color="#00B37E" />
                ) : (
                    <>
                        <Text style={styles.cardTexts}>Latitude {"\n"} {liveData.lat}</Text>
                        <Text style={styles.cardTexts}>Longitude {"\n"} {liveData.lng}</Text>
                        <Text style={styles.cardTexts}>Altitude {"\n"} {liveData.alt} km</Text>
                        <Text style={styles.cardTexts}>Elevação {"\n"} ---</Text>
                    </>
                )}
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