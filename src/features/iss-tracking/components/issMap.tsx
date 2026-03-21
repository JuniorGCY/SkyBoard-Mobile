import { View, Text, StyleSheet, ActivityIndicator} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import { useRoute } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocationStore } from "../store/useLocationStore";

interface MapProps {
    mapProps: {
        lat: string,
        lng: string,
        alt: string
    } 
}

export default function IssMap({mapProps}: MapProps) {
    const route = useRoute()
    const {passData} = route.params as any

    const mylatitude = useLocationStore((state) => state.latitude)
    const myLongitude = useLocationStore((state) => state.longitude)
    const myCity = useLocationStore((state) => state.city)

    return (
        <View style={styles.container}>
            {mapProps.lat === '---' ? (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="#00B37E"/>
                    <Text>Caçando Satelite.....</Text>
                </View>
            ) : (
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={{flex: 1, borderRadius: 10}}
                   mapType="hybrid"
                   region={{
                     latitude: parseFloat(mapProps.lat),
                     longitude: parseFloat(mapProps.lng),
                     latitudeDelta: 60,
                     longitudeDelta: 60
                   }}
                >
                    <Marker 
                       coordinate={{
                          latitude: parseFloat(mapProps.lat),
                          longitude: parseFloat(mapProps.lng)
                       }}
                       title={passData.satelite}
                       description={`Alt: ${mapProps.alt} km`}
                    >
                      <MaterialCommunityIcons name="satellite-variant" size={32} color="#00B37E" />
                    </Marker>

                    <Marker
                       coordinate={{
                          latitude: mylatitude,
                          longitude: myLongitude
                       }}
                       title="Minha Localização"
                       description={myCity}
                       pinColor="blue">

                    </Marker>

                </MapView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden'
    }
})