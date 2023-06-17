import { useState,useEffect,useCallback,useContext } from "react";
import { AppContext } from "../variante/Global";
import { View,ActivityIndicator,Text,StyleSheet,Alert} from "react-native";
import { SafeArea } from "./Safearea";
import { TextInput,Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { db } from "../variante/FireBase.setting";
import { setDoc,doc,collection } from "firebase/firestore";

const validationRules = yup.object({
    fullName:yup.string().required('required filed'),
    city:yup.string().required('required filed'),
    mail:yup.string().required('required filed').min(16),
    dob:yup.string(),
    bio:yup.string(),
    number:yup.string().required().min(7).max(11)
});

export function SetProfile ({navigation}) {
  const {uid} = useContext(AppContext);
  const [eventActivityIndicator,setEventActivityIndicator] = useState(false);

  return (
  <SafeArea>
    <Text style={styles.title}>Create Your Profile</Text>
    {eventActivityIndicator ?   <ActivityIndicator size='large'/> : null}

    <Formik
      initialValues={{ fullName:'',mail:'',city:'',dob:'',bio:'',number:'', }}
      onSubmit={(values,action) => {

        setEventActivityIndicator(true);//start ActivityIndicator
        setDoc(doc(db,'users',uid),{
          fullName:values.fullName,
          mailingAddress:values.mail,
          city:values.city,
          dateOfBirth:'01/27/2000',
          bioInfo:values.bio,
          number:values.number,
          createdAt:new Date().getTime()
        })
        .then(() => {
          setEventActivityIndicator(false);
          Alert.alert(
            'Message',
            'Profile created!!',
            [
              {text:'Go to Home',onPress:() => navigation.navigate('My Home')},
            ]
          )
        })
        .catch(error => {
          console.log(error);
          setEventActivityIndicator(false);//stop ActivityIndicator
          Alert.alert(
            'Message',
            error.message,
            [{text:'Dismiss'}]
          )
        })
      }}
      validationSchema={validationRules}
    >
        {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
          <View style={styles.form}>
            <View>
              <TextInput
                outlineColor="gray"
                activeOutlineColor="#5D9C59"
                mode="outlined"
                label='Full name'
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              {touched.fullName && errors.fullName 
              ? <Text style={{color:'red'}}>{errors.fullName}</Text> 
              : null}
            </View>
            <View>
              <TextInput
                outlineColor="gray"
                activeOutlineColor="#5D9C59"
                mode="outlined"
                label='City of Residence'
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
              />
              {touched.city && errors.city 
              ? <Text style={{color:'red'}}>{errors.city}</Text> 
              : null}
            </View>

            <View>
              <TextInput
                outlineColor="gray"
                activeOutlineColor="#5D9C59"
                mode="outlined"
                label='Home address'
                onChangeText={handleChange('mail')}
                onBlur={handleBlur('mail')}
                value={values.mail}
                multiline={true}
              />
              {touched.mail && errors.mail 
              ? <Text style={{color:'red'}}>{errors.mail}</Text> 
              : null}
            </View>
            <View>
              <TextInput
                outlineColor="gray"
                activeOutlineColor="#5D9C59"
                mode="outlined"
                label='Phone Number'
                onChangeText={handleChange('number')}
                onBlur={handleBlur('number')}
                value={values.number}
              />
              {touched.number && errors.number 
              ? <Text style={{color:'red'}}>{errors.number}</Text> 
              : null}
            </View>

            <View>
              <TextInput
                outlineColor="gray"
                activeOutlineColor="#5D9C59"
                mode="outlined"
                label='bio'
                onChangeText={handleChange('bio')}
                onBlur={handleBlur('bio')}
                value={values.bio}
                multiline={true}
              />
              {touched.bio && errors.bio 
              ? <Text style={{color:'red'}}>{errors.bio}</Text> 
              : null}
            </View>
    
            <Button
            buttonColor="#5D9C59"
            mode="contained"
            onPress={handleSubmit}
            contentStyle={{paddingVertical:6}}
            style={{marginVertical:12}}>
               {
                eventActivityIndicator
                ? <ActivityIndicator size='small'/>
                : 'Create Profile'
               }
            </Button>
          </View>
        )}
      </Formik>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  title:{
      fontSize:35,
      marginBottom:16
  },
  form:{
    flexDirection:'column',
    gap:4
  }
})