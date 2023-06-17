import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
   TouchableOpacity
  ,Image  } from 'react-native';
  import { SafeArea } from './Safearea';
  import { ahmad } from '../styles/Styles1';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { Donate } from './Donate';
  import { About } from './About';
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
  import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
import { faL } from '@fortawesome/free-solid-svg-icons';
  

  const Tab = createBottomTabNavigator()

function Home ({navigation}) {
{/* <Image source={require('../assets/pic.jpg')}
        alt='app logo'
        style={style.rewers}/> */}
      
  return (
    <><View style={style.counter}>
      <View style={style.container}>
      
        <Text style={style.title}>Maidabo</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={style.texted}>Sign Up</Text></TouchableOpacity>
      </View>
    
      
    </View >
    
  <SafeArea>
    <View style={style.color}>
    
    <View style={style.flex}>

      <View style={style.boxes}>
    <View style={style.border}>
        <FontAwesomeIcon icon={faHeartCirclePlus} color='white' size={42}/>
        <Text style={style.borders}>Donate</Text>
      </View>

    <View style={style.border}>
        <FontAwesomeIcon icon={faHeartCirclePlus} color='white' size={42}/>
        <Text style={style.borders}>Donate</Text>
      </View>

    <View style={style.border}>
        <FontAwesomeIcon icon={faHeartCirclePlus} color='white' size={42}/>
        <Text style={style.borders}>Donate</Text>
      </View>
      </View>
    <View style={ahmad.nav}>
        <Text style={ahmad.learn}>Welcome to Maidabo Foundation  </Text>
        <Text style={ahmad.help}>We are in a mission 
        to help the helpless</Text>
          <TouchableOpacity>
          <Text style={ahmad.more}>Learn More</Text>
          </TouchableOpacity>
      </View>
    <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
    <View style={style.box}>
      <Text style={style.bar}> Click here to donate </Text>
      <Image source={require('../assets/arrow.png')}
      alt='app logo'
      style={style.image}
      />
      </View></TouchableOpacity>
     
      </View></View>
      </SafeArea></>
  );
}

export function MyHome(){
  return(
    <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'md-home'
                  : 'md-home-outline';
               } else if (route.name === 'About') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'blue',
                  tabBarInactiveTintColor: 'gray',
                })}
              >
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
         
          <Tab.Screen name="About" component={About} options={{headerShown:false}}/>
      </Tab.Navigator>
  )
}


const style = StyleSheet.create({
  color:{
    flex:1,
    //backgroundColor:'skyblue',
    margin:-12,
    padding:3,
  },
  flex:{
    flex:1,
    marginTop:-15
  },
  rewer:{
     height:50,
     width:50,
     backgroundColor:(`#f5f5f5`),
  },
  rewers:{
    height:60,
     width:60,
     backgroundColor:(`#f5f5f5`),
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
    marginTop:35,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

    
  },  
  
    
    counter:{
        //backgroundColor:  (`#e0ffff`),
        padding:0,
        marginBottom:50,
        backgroundColor: ('green')
        
  },
   title:{
    textAlign:'left',
    fontSize:40,
    color:'white',
    margin:13,
    padding:3,
    fontWeight:'bold',
    fontFamily:'Cochin',
    marginRight:15
  },
  image:{
      height:50,
      width:50
  },
  texted:{
      color:'white',
      marginRight:10,
      fontSize:15
  },
  border:{
    borderWidth:1,
    width:70,
    flexDirection:'column',
  
    borderRadius:7,
    margin:15,
    height:90,
    backgroundColor:'green',
    padding:10
  },
  heart:{
    height:50,
    width:50,
    
  },
  borders:{
    color:'white'
  },boxes:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
  }) 


 

