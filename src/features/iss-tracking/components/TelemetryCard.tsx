import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
    dateProps: {
        lat: string,
        lng: string,
        alt: string
    }
}

export default function TelemetryCard({dateProps}: Props) {
    if (dateProps.lat === '---') {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#00B37E" />
            </View>
        );
    }
    return (
        <>
            <Text style={styles.cardText}>Latitude {"\n"} {dateProps.lat}</Text>
            <Text style={styles.cardText}>Longitude {"\n"} {dateProps.lng}</Text>
            <Text style={styles.cardText}>Altitude {"\n"} {dateProps.alt} km</Text>
            <Text style={styles.cardText}>Elevação {"\n"} ---</Text>
        </>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: RFValue(10)
    },
    cardText: {
        color: '#fff',
        marginTop: RFValue(5),
        fontSize: RFValue(13)
    }
})