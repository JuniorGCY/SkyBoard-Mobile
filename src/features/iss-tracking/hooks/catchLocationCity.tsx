//Diferente do UserLocation que usa o GPS, esse, se o usuario colocar o nome da cidade, buscamo e guardamos no Zustand(store)
import * as Location from 'expo-location'
import { useLocationStore } from '../store/useLocationStore'

export async function catchLocationCity(cityP: string) {
    if (!cityP) return;

    try {
        const result = await Location.geocodeAsync(cityP)

        if (result.length > 0) {
            const lat = result[0].latitude
            const lgn = result[0].longitude

            useLocationStore.getState().setNewLocation(lat, lgn, cityP)
            alert("Localizado! " + cityP)
        } else {
            alert("Cidade não encontrada")
        }
    } catch (error) {
        console.log("Erro ao pesquisar a cidade: ", error)
    }
}