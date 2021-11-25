import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'react-native-elemnets';
import {colors} from '../global/styles';


const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name = 'HomeStack'
                component = {Homestack}
                options = {{
                    title: 'Home',
                    drawerIcon: ({focussed,size}) =>
                    <Icon type ='material-community' 
                          name = 'home'
                          color = {focussed?'#7cc' :colors.grey2}
                          size = {size} />,
                
              headerShown : false
                }}

            />
        </Drawer.Navigator>
    )
}