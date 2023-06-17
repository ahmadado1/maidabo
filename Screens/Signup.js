import { View,TouchableOpacity,Text,StyleSheet,Alert} from "react-native";
import { TextInput,Button } from "react-native-paper";
import { SafeArea } from "./Safearea";
import { useContext } from "react";
import { AppContext }from "../variante/Global"
import { Formik } from "formik";
import * as yup from 'yup';
import { auth} from "../variante/FireBase.setting";
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth"

const validFields = yup.object({
    email:yup.string().required().min(5).max(26),
    password:yup.string().required().min(7).max(25)
    // .oneOf([yup.ref('passwordConfirmation'),null],)
})

export function Signup({navigation}) {
    const {setUid} = useContext(AppContext);
  
    return(
        <SafeArea>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Maidabo Foundation</Text>
                <Text style={styles.text}>Please input all credencials to register</Text>
                <View style={styles.input}>
                <Formik
                      initialValues={{email: '',password:''}}
                      onSubmit={(values,action) => {
                        createUserWithEmailAndPassword(auth,values.email,values.password)
                        .then(() => onAuthStateChanged(auth,(user) => {
                          setUid(user.uid);
                           navigation.navigate('My Home')
                        }))
                        .catch((error) => {
                          //custom action for defferent errors
                          if (error.code == 'auth/invalid-email'){
                            Alert.alert('Message','Invalid email! ',[
                              {text:'Try again',},
                            ])
                          }else if (error.code == 'auth/email-already-in-use'){
                            Alert.alert('Message','Account allready exist with the same email',[
                              {text:'Go to Login',onPress:() => navigation.navigate('Signin')},
                              {text:'Forgot Password',onPress:() => navigation.navigate('ForgotPassword')}
                            ])
                          }else{
                            Alert.alert('Message','Something went wrong ',[
                              {text:'Try again',},
                            ])
                          }
                        }) 
                      }}
                      validationSchema={validFields}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                          <View>
                            <View>
                            <TextInput
                              outlineColor="black"
                              activeOutlineColor="black"
                              mode="outlined"
                              label='email'
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
                              outlineColor="black"
                              activeOutlineColor="black"
                              mode="outlined"
                              label='Password'
                              style={styles.input}
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
                            buttonColor="black"
                            mode="contained"
                            onPress={handleSubmit}
                            contentStyle={{paddingVertical:6}}
                            style={{marginVertical:12}}>Create account</Button>
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
//  <Button 
//                                     mode="contained"
//                                     onPress={handleSubmit}
//                                     contentStyle={{paddingVertical:6}}
//                                     style={{marginVertical:12}}>Register</Button>
const styles = StyleSheet.create({
    title:{
        fontSize:25,
    },
    wrapper:{
        flex:1,
        alignItems:'center',
        //justifyContent:'center',
        marginTop:30,
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
