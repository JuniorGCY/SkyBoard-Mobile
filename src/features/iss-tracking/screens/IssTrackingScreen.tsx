import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IssStackParamList } from "../../../navigation/IssStack/IssStack";

import { fetchAllFamousPasses } from "../services/getVisualPasses";

export default function IssTrackingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<IssStackParamList>>()
  const [tracking, setTracking] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      async function loadingSpacial() {
          setLoading(true)
          const dates = await fetchAllFamousPasses()
          setTracking(dates)
          setLoading(false)
      }
      loadingSpacial()
  }, [])

  const renderCard = ({ item }: { item: any }) => (
      <TouchableOpacity onPress={() => navigation.navigate("IssDetailsScreen", { passData: item })}>
          <View style={styles.cardContainer}>
              <View style={{alignItems: 'flex-start'}}>
                  <Text style={styles.mainTextCard}>{item.diaSemana}</Text>
                  <Text style={styles.textCard}>{item.satelite}</Text>
                  <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.textCard, {marginEnd: 10}]}>Mag: {item.magnitude}</Text>
                      <Text style={styles.textCard}>Elev: {item.elevacao}°</Text>
                  </View>
              </View>

              <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.mainTextCard}>{item.dataCurta}</Text>
                  <Text style={styles.textCard}>{item.horaInicio} - {item.horaFim}</Text>
                  <Text style={styles.textCard}>Previsão...</Text> 
              </View>
          </View>
      </TouchableOpacity>
  );

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerTitle}>Iss Tracking</Text>
          </View>

          <View style={styles.searchContainer}>
              <View style={{flexDirection: 'column', marginBottom: RFValue(20)}}>
                  <Text style={{color: '#fff', fontSize: RFValue(20), marginTop: RFValue(20), textAlign: 'center'}}>
                    Busque sua localização
                  </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                  <TextInput
                      inputMode="text"
                      style={styles.textinput}
                      placeholder="Digite sua localização"
                      placeholderTextColor="#ccc"
                  />
                  <TouchableOpacity onPress={() => console.log("Buscar clicado!")}>
                      <View style={styles.manualIconLocation}>
                          <MaterialCommunityIcons name="map-marker" size={28} color="#fff"/>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>

          {loading ? (
              <ActivityIndicator size="large" color="#00B37E" style={{ marginTop: 50 }} />
          ) : (
              <FlatList 
                  data={tracking}
                  keyExtractor={(item) => item.id}
                  renderItem={renderCard}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 20, width: '100%' }}
              />
          )}
          
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
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
    searchContainer: {
        marginVertical: RFValue(10),
        marginHorizontal: RFValue(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textinput: {
        width: "85%",
        minHeight: 40,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        color: '#fff'
    },
    manualIconLocation: {
        marginHorizontal: RFValue(10),
        padding: RFValue(5),
        borderWidth: 1, 
        borderColor: "#fff", 
        borderRadius: 99
    },
    cardContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: RFValue(20),
        paddingVertical: RFValue(5),
        paddingHorizontal: RFValue(10),
        alignSelf: 'center',
        borderWidth: 0.8,
        borderColor: '#FFF',
        borderRadius: 10
    },
    mainTextCard: {
        color: "#FFF",
        fontSize: RFValue(15),
        fontWeight: 'bold'
    },
    textCard: {
        color: "#FFF",
        fontSize: RFValue(13),
        fontWeight: 'bold',
        marginTop: RFValue(10),
    }
})