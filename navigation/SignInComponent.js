import React from 'react'
import { View, Text,  StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
import { FontAwesome  } from '@expo/vector-icons';
import { Feather  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default class SignInComponent extends React.Component{
   
    constructor(props) {
        super(props);
        this.state={
        check_textInputChange: false,
        password:'',
        secureTextEntry: true   
        }
    }  

    textInputChange(value) {
        if(value.length!==0){
            this.setState({
                check_textInputChange: true,

            });
        }  
        else{
            this.setState({
                check_textInputChange: false
            }); 
        }
    }
    secureTextEntry() {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }
    render() {
        
        return(
            <View style={styles.container}>
               <View style={styles.header}> 
               <Text style={styles.text_header}>Welcome World Famous!
                    </Text>
               </View>
                <Animatable.View 
                animation="fadeInUpBig"
                  style={styles.footer}>
                <Text style={styles.text_footer}>E-MAIL
                    </Text>
                    <View style={styles.action}>
                    <FontAwesome name="user-o" size={24} color="#05375a"/>
                    <TextInput
                        placeholder="Your email..."
                        style={styles.textInput}
                        onChangeText={(text) => this.textInputChange(text)}
                    />
                    {this.state.check_textInputChange?
                        <Animatable.View 
                animation="bounceIn">
                    <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                    />
                    </Animatable.View>
                    :null}
                    </View>

                    <Text style={[styles.text_footer,{
                        marginTop:35
                    }]}>PassWord
                    </Text>
                    <View style={styles.action}>
                    <Feather  name="lock" size={24} color="#05375a"/>
                    {this.state.secureTextEntry ?
                    <TextInput
                        placeholder="Your Password..."
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={this.state.password}
                        onChangeText={(text)=> this.setState({
                            password:text
                        })}
                    />
                    :
                    <TextInput
                        placeholder="Your Password..."
                        style={styles.textInput}
                        value={this.state.password}
                        onChangeText={(text)=> this.setState({
                            password:text
                        })}
                    />}
                    <TouchableOpacity
                    onPress={()=>this.secureTextEntry()}>
                    {this.state.secureTextEntry ?
                    <Feather 
                    name="eye-off"
                    color="gray"
                    size={20}
                    />
                    :
                    <Feather 
                    name="eye"
                    color="gray"
                    size={20}
                    />
                    }
                    </TouchableOpacity>
                    </View>
                    <Text style={{color:'#009bd1', marginTop: 15}}>Forgot PassWord</Text>
                    <View style={styles.button}>
                            <LinearGradient colors={['#5db8fe','#39cff2']}  style={styles.signIn}>
                            <Text style={[styles.textSign, {
                                color: 'white'
                            }]}>Sign in</Text>
                          </LinearGradient>
                          <TouchableOpacity  onPress={() => this.props.navigation.navigate("SignOutComponent")}
                          style={[styles.signIn,{
                              borderColor: '#4dc2f8',
                              borderWidth: 1,
                              marginTop: 15 
                          }]}>
                          <Text style={[styles.textSign], {
                              color: '#4dc2f8'
                          }}>Sign Up</Text> 
                          </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a'
    },
    header: {
        flex:1,
       justifyContent:'flex-end',
       paddingHorizontal: 20,
       paddingBottom: 50  
    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
         color: 'lightblue',
         fontWeight: 'bold',
         fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize:18
    },
    action: {
        flexDirection: 'row',
        marginTop:10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
       fontSize: 18,
       fontWeight: 'bold'
    }
})
