import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IssTrackingScreen from "../../features/iss-tracking/screens/IssTrackingScreen";
import IssDetailsScreen from "../../features/iss-tracking/screens/IssDetailsScreen";

export type IssStackParamList = {
    IssTrackingScreen: undefined,
    IssDetailsScreen: undefined
}

const Stack = createNativeStackNavigator<IssStackParamList>()

export function IssStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="IssTrackingScreen" component={IssTrackingScreen} />
            <Stack.Screen name="IssDetailsScreen" component={IssDetailsScreen} />
        </Stack.Navigator>
    )
}