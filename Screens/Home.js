import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
   TouchableOpacity
  ,Image  } from 'react-native';
  import { SafeArea } from './Safearea';
  import { ahmad } from '../styles/Styles1';


export  function Home({navigate}) {
  return (
  <SafeArea>
    <View style={style.counter}>
      <View style={style.container}>
        <Text style={style.title}>Maidabo</Text>
        <TouchableOpacity>
        <Image source={require('../assets/user.png')}
        alt='app logo'
        style={style.rewer}/></TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity>
    <View style={style.box}>
      <Text style={style.bar}> Click here to donate </Text>
      <Image source={require('../assets/arrow.png')}
      alt='app logo'
      style={style.image}
      />
      </View></TouchableOpacity>
      <View style={ahmad.nav}>
        <Text style={ahmad.learn}>Maidabo Foundation  </Text>
        <Text style={ahmad.help}>We help the poor, 
          old women with many kids</Text>
          <TouchableOpacity>
          <Text style={ahmad.more}>Learn More</Text>
          </TouchableOpacity>
      </View>
      <View style={style.asap}>
        <Image source={require('../assets/home.png')}
        alt='app logo'
        style={ahmad.home}/>
      </View>
      </SafeArea>
  );
}

const style = StyleSheet.create({
  rewer:{
     height:50,
     width:50,
     backgroundColor:(`#f5f5f5`)
  },
  box:{
    //backgroundColor:'black',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    padding:20,
    margin:8,
    borderRadius:10,
    backgroundColor:(`#f5f5f5`)
  },
  bar:{
     
      fontSize:20
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },  
  
    
    counter:{
    padding:0,
    marginBottom:50,
    backgroundColor: (`#f5f5f5`)
    
  },
   title:{
    textAlign:'left',
    fontSize:35,
    color:'orange',
    margin:0,
    padding:20,
    fontWeight:'bold',
  },
  image:{
      height:50,
      width:50
  },
  asap:{
    
    
  }
  }) 


 

