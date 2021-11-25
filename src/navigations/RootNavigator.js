import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function rootNavigator(){
    return(
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}