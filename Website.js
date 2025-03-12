import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Login from "./Login";

const StackNavigator = createStackNavigator()

export default function Website() { // Here we call Login's page to execute it
    return (
        <NavigationContainer>
            <StackNavigator>
                <StackNavigator.Login name='Login' component={Login}/>
            </StackNavigator>
        </NavigationContainer>
    )
}
