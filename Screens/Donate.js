import { StyleSheet, 
    Text, 
    View, 
     TouchableOpacity
    ,Image  } from 'react-native';
    import { SafeArea } from './Safearea';
    import { Button } from 'react-native-paper';

export function Donate () {
    return(
        <SafeArea>
            <View>
            <View style={style.flex}>
                <Image source={require('../assets/help.jpg')}
                style={style.back}/>
                <Text style={style.help}>We Are In A Mission To Help The HelpLess</Text>
                
            </View>
            <Text style={style.text}>Offering help to poor and needy 
            is all about offering voluntary help. If you are blessed
             with resources, then it becomes your duty to offer to help
              hand to poor people. There are many different ways in 
              which help can be offered, to the right person who is 
              in need.</Text>
                <View style={style.button}>
                <Button mode="contained" buttonColor='blue' onPress={() => console.log('Pressed')}>
                    Donate Now
                    
                </Button>
                </View>
                </View>
            
        </SafeArea>
    )
}

const style = StyleSheet.create({
    flex:{
        alignItems:'center'
    },
    back:{
        width:370,
        height:370,
        padding:70,
        margin:10
    },
    help:{
        fontSize:30
    },
    text:{
        marginTop:15,
        fontSize:15
    },
    button:{
        marginTop:20,
        width:200
    }
})