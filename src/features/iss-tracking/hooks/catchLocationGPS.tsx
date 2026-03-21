//Esse hook visa buscar a localização do usuario via GPS e retornar para o Store para definir sua posição no Google Maps

import * as Location from 'expo-location'
import { useLocationStore } from '../store/useLocationStore'

export async function catchLocationGPS () {
    try {
        const {status} = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert("Precisamos da sua permissão para achar voce")
            return
        }

        const local = await Location.getCurrentPositionAsync({})
        const lat = local.coords.latitude
        const lng = local.coords.longitude

        const address = await Location.reverseGeocodeAsync({
            latitude: lat,
            longitude: lng
        })

        const cityName = address[0]?.subregion || address[0]?.city || "Desconhecido"

        useLocationStore.getState().setNewLocation(lat, lng, cityName)
        alert("Localizado! " + cityName)
    } catch (error) {
        console.log("Erro ao buscar GPS", error)
    }
}