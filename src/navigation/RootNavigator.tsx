import React, {useContext} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from '../services/AuthContext';

import AppTabs from "./AppTabs";
import AuthStack from "./AuthStack";

export type RootParamList = {
    AppTabs: undefined,
    AuthStack: undefined
}


const Stack = createNativeStackNavigator<RootParamList>()

export default function RootNavigator() {
    const { user } = useContext(AuthContext)

    return (
        <NavigationContainer>
            <Stack.Navigator id="MainNavigation" screenOptions={{headerShown: false}}>
                {user ? (
                    <Stack.Screen name="AppTabs" component={AppTabs} />
                    
                ) : (
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}