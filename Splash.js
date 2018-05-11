 import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Splash extends Component {
    render(){
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>bter.</Text>
                    <Text style={styles.subtitle}>your budget planner</Text>
                </View>
                <View style={styles.subtitleWrapper}>
                    <Text style={styles.poweredby}>powered by GOD</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#c44569', 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200'
    },
    poweredby: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    }

})