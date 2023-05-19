import { View,TouchableOpacity,Text,StyleSheet,} from "react-native";
import { SafeArea } from "./Safearea";
import { TextInput,Button } from "react-native-paper";
import { useState } from "react";




export function Signin ({navigation}) {
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    return(
        <View style={styles.view}>
            <Text style={styles.title}>Maidabo Foundation</Text>
            <Text style={styles.text}>Login to your Maidabo account</Text>
        <View style={styles.input}>
         <TextInput
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
            
            />
         <TextInput
            label="Password"
            value={number}
            onChangeText={number => setNumber(number)}
            style={styles.textinput}
            secureTextEntry={true}
            />
            <View style={styles.button}>
            <Button  mode="contained" onPress={() => console.log('Pressed')}>
                Login
            </Button></View>
        </View>
        <View style={styles.account}>
                          <Text >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.sign}>Sign up</Text></TouchableOpacity>
                    
                    </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:280, 
    },
    title:{
        fontSize:30,
        //fontFamily
    },
    text:{
        marginTop:10,
       
    },
    input:{
        width:260,
        marginTop:20
    },

    textinput:{
        marginTop:15
    },
    button:{
        marginTop:20
    },
    account:{
        flexDirection:'row',
        marginTop:10
      },
    sign:{
        color:'blue'
    }
})