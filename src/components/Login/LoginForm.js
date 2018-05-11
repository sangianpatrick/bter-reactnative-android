import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component{
  render() {
    return (
            <View style={styles.container}>
                {/* <StatusBar barStyle="light-content"/> */}
                <TextInput 
                    style={styles.input}
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={()=> this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                />
                <TextInput 
                    style={styles.input}
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry    
                    ref={(input) => this.passwordInput = input}
                    underlineColorAndroid='transparent'
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        //backgroundColor: 'rgba(255,255,255,0.1)',
        marginBottom: 10,
        color: "#ffffff",
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f8a5c2',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '500'
    }
});