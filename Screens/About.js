import { StyleSheet, 
    Text, 
    View, 
     TouchableOpacity
    ,Image,ScrollView  } from 'react-native';
    import { useState,useEffect,useCallback } from 'react';
    import { SafeArea } from './Safearea';
    import * as SplashScreen from 'expo-splash-screen';
    import * as Font from 'expo-font';
    import { Roboto_400Regular } from '@expo-google-fonts/roboto';

export function About ({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
   
          await Font.loadAsync({Roboto_400Regular});
         
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }
  
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);
  
    if (!appIsReady) {
      return null;
    }

    return(
      <>
      <View style={styles.back}>
                <Text style={styles.title}>Maidabo Foundation</Text>
            </View>
        <SafeArea><ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={styles.heading}>
              <Text style={styles.heading1}>QUATERLY REPORT</Text>
              <Text style={styles.text}>
                    The Microfinance Bank revolving fund from March to May 2021 is 
                    (One Million) 1,000,000 which was supply the Good and Services 
                    to the less privilege women who need empowering capital to run-up 
                    their business for income generation activities who come from different 
                    kinds of trades to eradicate poverty across Kano State.
              </Text>
              <Image source={require('../assets/women.jpg')}
              style={styles.image}/>
              <Text style={styles.text1}>Bags of rice are shared to supporting women</Text>
              <Text style={styles.text2}>The program enables them to burst their business 
                and makes them to know the importance of forming 
                Co-operative groups.he women understand the 
                importance of Microfinance because we are 
                not giving the cash but items, you need and have rules and 
                regulation before we give the items, we consider only those 
                are in business not the started.
             </Text>
             <Image source={require('../assets/rice.jpg')}
             style={styles.image1}/>
             <Text style={styles.text3}>The bag of rice are bough in huge amount which are shared to the supporting women</Text>
             <Text style={styles.text4}>
               While from the start we empowered 200 women now
               because we started with 30 women then when repay back we 
               used to give another group. The working Capital is N1,141,900 
               (one million one hundred and fourty one thousand nine hundred) 
               with the exception of expenses such as transportation, 
               stationaries, photocopies and other things that enable 
               us to carry out the programme.</Text>
               <Text style={styles.text5}>This month of June we are expected 60 women to 
                complete their payment, and the fresh group of 2nd 
                Quarter June to August were start their repayment this
                 month. 
              </Text>
              <Text style={styles.text6}>
                 We pray the Almighty Allah to help us and sustain
                 the program at large society to eradicate the darkness 
                 and sadness of women and children from poverty. </Text>
            </View>
            <View style={styles.space}>
              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
              <Text style={styles.contact}>Contact Us</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeArea></>
    )
}

const styles = StyleSheet.create({
    back:{
        backgroundColor:'green',
        padding:60,
        marginHorizontal:-10,
        borderRadius:15
    },
    title:{
        fontFamily:'Roboto_400Regular',
        color:'white',
        fontSize:25,
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:10,
        padding:10,
        margin:10,
        
        
    },
    heading:{
      marginTop:30,
      alignItems:'center'
    },
    heading1:{
      fontSize:20
    },
    text:{
      marginTop:10,
      fontSize:17,
      textAlign:'left',
      marginBottom:10
    },
    image:{
      marginTop:20,
      height:270,
      width:290,
      marginBottom:5
    },
    text1:{
      fontSize:14,
      marginBottom:25
    },
    text2:{
      fontSize:15,
      textAlign:'left'
    },
    image1:{
      marginTop:20,
      height:270,
      width:290,
      marginBottom:5
    },
    text3:{
      textAlign:'left',
      fontSize:12,
      marginBottom:15
    },
    text4:{
      textAlign:'left',
      fontSize:15,
      marginBottom:10
    },
    text5:{
      fontSize:15,
      marginTop:10,
      textAlign:'left',
      marginBottom:10
    },
    text6:{
      textAlign:'left'
    },
    space:{
      marginTop:20,
      padding:10
      

    },
    contact:{
      fontSize:18,
      borderWidth:1,
      width:130,
      padding:10,
      backgroundColor:'black',
      color:'white'
    }

})