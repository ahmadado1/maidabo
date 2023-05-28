import { createStackNavigator } from "@react-navigation/stack";
import {MyHome } from "./Home"
import { Signup } from "./Signup";
import { About } from "./About";
import { Signin } from "./Signin";
import {Donate } from "./Donate"


const Stack = createStackNavigator();

export function StackNav (){
    return(
        <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="Home">
            <Stack.Screen name="My Home" component={MyHome} options={{headerShown:false}}/>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Donate" component={Donate} />
        </Stack.Navigator>
    )
}