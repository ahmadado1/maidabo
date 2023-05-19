import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { About } from "./About";
import { Signin } from "./Signin";


const Stack = createStackNavigator();

export function StackNav (){
    return(
        <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="Login">
            
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}