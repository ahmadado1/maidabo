import { View,TouchableOpacity,Text,StyleSheet,} from "react-native";
import { TextInput,Button } from "react-native-paper";
import { SafeArea } from "./Safearea";
import { useState } from "react";

export function Signup() {
    const [text, setText] = useState("");
    return(
        <SafeArea>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Maidabo Foundation</Text>
                <Text style={styles.text}>Please input all credencials to register</Text>
                <View style={styles.input}>
                <TextInput
                    label="Full Name"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input1}
                />
                <TextInput
                    label="Phone Number"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input2}
                />
                <TextInput
                    label="Home Address"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input3}
                />
                <TextInput
                    label="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input4}
                />
                <TextInput
                    label="Password"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input4}
                />
                <View style={styles.button}>
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                    Register
                </Button></View>
                </View>
                <View style={styles.account}>
                            <Text >Already have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.sign}>Sign in</Text>
                    </TouchableOpacity>
                    
                    </View>
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:25,
    },
    wrapper:{
        flex:1,
        alignItems:'center',
        //justifyContent:'center',
        marginBottom:280
    },
    text:{
        marginTop:10,
    },
    input:{
        marginTop:8,
        width:300
    },
    input2:{
        marginTop:20
    },
    input3:{marginTop:20},
    input4:{marginTop:20},
    button:{marginTop:20},
    sign:{color:'blue'},
    account:{
        flexDirection:'row',
        marginTop:10
      },
})