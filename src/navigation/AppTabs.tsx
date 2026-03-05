import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/App/HomeScreen"

export type AppTabsParamList = {
    HomeScreen: undefined
}

const Tab = createBottomTabNavigator<AppTabsParamList>()

export default function AppTabs() {
    return (
        <Tab.Navigator id="AppTabs" screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        </Tab.Navigator>
    )
}