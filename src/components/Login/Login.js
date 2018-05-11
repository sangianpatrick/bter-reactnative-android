import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
  static navigationOptions = {
    header: null
  }
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../../images/bter-logo.png')} 
                />
                <Text style={styles.title}>
                    bter.
                </Text>
                
            </View>
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
            
        </KeyboardAvoidingView>  
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c44569',
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
});