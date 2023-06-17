import { StyleSheet, 
    Text, 
    View, 
     TouchableOpacity
    ,Image,ScrollView  } from 'react-native';
    import { SafeArea } from './Safearea';
    import { useContext } from 'react';
    import { AppContext } from '../variante/Global';
    import { Button } from 'react-native-paper';

    export function ContactUs ({navigation}) {
        

    }
    const styles = StyleSheet.create({
        wrapper:{
           flex:1,
           justifyContent:'center',
           alignItems:'center',
           gap:16
        },
        subHeader2:{
           fontSize:18
        },
        mainTitle:{
           fontSize:26,
           marginBottom:6
        },
        crimeAlert:{
           fontSize:12,
           color:'gray',
           marginBottom:8
        }
   })  