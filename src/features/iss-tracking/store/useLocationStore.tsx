import { create } from "zustand";

interface LocationState {
    latitude: number;
    longitude: number;
    city: string;
    setNewLocation: (lat: number, lng: number, city: string) => void
}

export const useLocationStore = create<LocationState>((set) => ({
    latitude: -8.3916,
    longitude: -47.7677,
    city: 'Itacajá',

    setNewLocation: (lat, lng, city) => set({latitude: lat, longitude: lng, city: city})
}))