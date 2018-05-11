import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

export default class Login extends Component{
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../../images/bter-logo.png')} 
                />
                <Text>
                    <Text style={{color: '#fff',fontSize: 15,fontWeight: '200', opacity:0.3}}>bter.</Text>
                    <Text style={{color: '#000',fontSize: 15,fontWeight: '200', opacity:0.9}}>&nbsp; makes budgeting &nbsp;</Text>
                    <Text style={{color: '#fff',fontSize: 15,fontWeight: '200', opacity:0.9}}>easier</Text>
                </Text>
            </View>
            <View style={styles.formContainer}>

            </View>
            
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c44569',
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