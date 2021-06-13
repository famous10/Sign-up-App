import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, StyleSheet,StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';


 function Home(props) {
  const { navigation } = props;
    return (
        <View style={ styles.container}>
          <StatusBar barStyle="light-content"/>
           <View style={styles.header}>
               <Animatable.Image animation="bounceIn"
               duration={1500}
                source={require('../assets/lion.png')}
                 style={styles.logo}
                 resizeMode="stretch"
               />
           </View>
           <Animatable.View style={styles.footer}
           animation="fadeInUpBig">
                <Text style={styles.title}>Stay connected with world Famous!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInComponent')}>
                         <LinearGradient
                          colors={['#5db8fe','#39cff2']}  style={styles.signIn}>
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons name="navigate-next"
                            color="white"
                            size={20}
                            />
                          </LinearGradient>
                          </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
      );
}

const {height} = Dimensions.get("screen")
const height_logo = height * 0.7 * 0.4;    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#05375a',
    },
    header:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    footer:{
      flex:1,
      backgroundColor:'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius:30,
      paddingVertical: 50,
      paddingHorizontal:30
    },
    logo: {
      width: height_logo,
      height: height_logo
    },
    title: {
      color: '#05375a',
      fontWeight: 'bold',
      fontSize:30
    },
    text: {
      color: 'gray',
      marginTop: 5
    },
    button: {
      alignItems: 'flex-end',
      marginTop: 30
    },
    signIn:{
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
    },
    textSign: {
      color: 'white',
      fontWeight: 'bold'
    }
  });

  export default Home;
 