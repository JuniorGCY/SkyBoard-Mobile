import {View, StyleSheet} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import WatchScreen from "../screens/App/WatchScreen"
import CommunityScreen from "../screens/App/CommunityScreen"
import HomeScreen from "../screens/App/HomeScreen"
import IssTrackingScreen from "../screens/App/IssTrackingScreen"
import SuggestionsScreen from "../screens/App/SuggestionsScreen"

import { RFValue } from "react-native-responsive-fontsize"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"


export type AppTabsParamList = {
    WatchScreen: undefined,
    CommunityScreen: undefined,
    HomeScreen: undefined,
    IssTrackingScreen: undefined,
    SuggestionsScreen: undefined
}

const Tab = createBottomTabNavigator<AppTabsParamList>()

export default function AppTabs() {
    return (
        <Tab.Navigator id="AppTabs" initialRouteName="HomeScreen" screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#CCCCCC',
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'transparent',
                borderTopWidth: 0,
                elevation: 0,
                height: 100,
                paddingBottom: 10
            },
            tabBarLabelStyle: {
                fontSize: 15,
                marginTop: 15
            }
            }}>

            <Tab.Screen 
              name="WatchScreen" 
              component={WatchScreen} 
              options={{
                tabBarLabel: 'Observar',
                tabBarIcon: ({ focused}) => (
                    <Ionicons 
                       name={focused ? "planet" : "planet-outline"}
                       size={RFValue(23)}
                       color={focused ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)"}
                    />
                )
            }}/>

            <Tab.Screen 
              name="CommunityScreen" 
              component={CommunityScreen} 
              options={{
                tabBarLabel: 'Comunidade',
                tabBarIcon: ({ focused}) => (
                    <Feather 
                       name="users"
                       size={RFValue(23)}
                       color={focused ? "FFFFFF" : "rgba(255, 255, 255, 0.4)"}
                    />
                )
            }}/>

            <Tab.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({focused}) => (
                    <View style={styles.centerButton}>
                        <Ionicons 
                            name='star'
                            size={RFValue(20)}
                            color={focused ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)"}
                        />
                    </View>
                )
            }}/>

            <Tab.Screen 
              name="IssTrackingScreen" 
              component={IssTrackingScreen} 
              options={{
                tabBarLabel: 'Iss',
                tabBarIcon: ({ focused}) => (
                    <MaterialCommunityIcons 
                       name={focused ? "satellite" : "satellite-variant"}
                       size={RFValue(23)}
                       color={focused ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)"}
                    />
                )
            }}/>

            <Tab.Screen 
              name="SuggestionsScreen" 
              component={SuggestionsScreen} 
              options={{
                tabBarLabel: 'Sugestões',
                tabBarIcon: ({ focused}) => (
                    <Ionicons 
                       name={focused ? "bulb" : "bulb-outline"}
                       size={RFValue(23)}
                       color={focused ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)"}
                    />
                )
            }}/> 


        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    centerButton: {
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})