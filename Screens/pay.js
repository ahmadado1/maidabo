import { StyleSheet, 
    Text, 
    View, 
     TouchableOpacity
    ,Image,ScrollView  } from 'react-native';
    import { SafeArea } from './Safearea';
    import { useContext } from 'react';
    import { AppContext } from '../variante/Global';
    import { Button } from 'react-native-paper';

    export function Pay ({navigation}) {
        const {number} = useContext(AppContext);

        
    return number !== null ?(
        <SafeArea>
           <Text>Credit Card Information</Text>
        </SafeArea>
    )
    : (
        <SafeArea>
            <View style={styles.wrapper}>
           <Text style={styles.subHeader2}>Sign In First to create a fund raiser</Text>
           <Button mode="contained" onPress={() => navigation.navigate('Signin')}
           contentStyle={{paddingVertical:4}}>Go to sign in</Button>
        </View>
        </SafeArea>
    )

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