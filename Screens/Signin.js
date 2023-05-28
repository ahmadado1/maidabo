import { View,TouchableOpacity,Text,StyleSheet,} from "react-native";
import { SafeArea } from "./Safearea";
import { TextInput,Button } from "react-native-paper";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from 'yup';

const valRulse = yup.object({
    email:yup.string().required().min(5).max(26),
    password:yup.string().required().min(7).max(26)
})


export function Signin ({navigation}) {
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    return(
        <View style={styles.view}>
            <Text style={styles.title}>Maidabo Foundation</Text>
            <Text style={styles.text}>Login to your Maidabo account</Text>
        <View style={styles.input}>
        <Formik
                        initialValues={{ email:'',password:'' }}
                        onSubmit={(values,action) => {
                          console.log(values.email)
                        }}
                        validationSchema={valRulse}
                      >
                          {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                            <View>
                              <View>
                                <TextInput
                                  mode="outlined"
                                  label='Email'
                                  style={styles.input}
                                  onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                {touched.email && errors.email
                                ? <Text style={{color:'red'}}>{errors.email}</Text> 
                                : null}
                                </View>

                                <View>
                                <TextInput
                                    mode="outlined"
                                    label='Password'
                                    style={styles.input2}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    />
                                    {touched.password && errors.password
                                        ? <Text style={{color:'red'}}>{errors.password}</Text> 
                                        : null}
                                    </View>

             

                                    
                                    <Button 
                                    mode="contained"
                                    onPress={handleSubmit}
                                    contentStyle={{paddingVertical:6}}
                                    style={{marginVertical:12}}>Register</Button>
                                    </View>
                                )}
                        </Formik>
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