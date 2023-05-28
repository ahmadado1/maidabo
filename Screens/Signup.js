import { View,TouchableOpacity,Text,StyleSheet,} from "react-native";
import { TextInput,Button } from "react-native-paper";
import { SafeArea } from "./Safearea";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from 'yup';

const validFields = yup.object({
    fullName:yup.string().required('this field is required').min(5).max(36),
    homeAddress:yup.string().required('type your home address').min(10).max(50),
    email:yup.string().required().min(5).max(26),
    password:yup.string().required().min(7).max(25)
    // .oneOf([yup.ref('passwordConfirmation'),null],)
})

export function Signup({navigation}) {
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");
    return(
        <SafeArea>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Maidabo Foundation</Text>
                <Text style={styles.text}>Please input all credencials to register</Text>
                <View style={styles.input}>
                <Formik
                        initialValues={{ fullName: '',homeAddress:'',email:'',password:'' }}
                        onSubmit={(values,action) => {
                          console.log(values.email)
                        }}
                        validationSchema={validFields}
                      >
                          {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                            <View>
                              <View>
                                <TextInput
                                  mode="outlined"
                                  label='Full Name'
                                  style={styles.input}
                                  onChangeText={handleChange('fullName')}
                                            onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                />
                                {touched.fullName && errors.fullName
                                ? <Text style={{color:'red'}}>{errors.email}</Text> 
                                : null}
                                </View>

                                <View>
                                <TextInput
                                    mode="outlined"
                                    label='Home Address'
                                    style={styles.input2}
                                    onChangeText={handleChange('homeAddress')}
                                    onBlur={handleBlur('homeAddress')}
                                    value={values.homeAddress}
                                    />
                                    {touched.homeAddress && errors.homeAddress
                                        ? <Text style={{color:'red'}}>{errors.homeAddress}</Text> 
                                        : null}
                                    </View>

                                    <View>
                                    <TextInput
                                        mode="outlined"
                                        label='Email'
                                        style={styles.input3}
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
                                        label='password'
                                        style={styles.input4}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={true}
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
                            <Text >Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
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
