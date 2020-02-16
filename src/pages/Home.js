import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, 
        Image} from 'react-native';

 

export default class Home extends React.Component {
    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        header: null,
      }
    
    render() {
        return (
            <View style={styles.secondContainer}>
                    <Image style={styles.logo}
                        source={require('../images/logo.jpeg')}>
                    </Image>
                    <Text style={styles.titleText}>You are in safe hands</Text>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() =>
                        this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    secondContainer : {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    titleText: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'Arial',
        fontWeight: '400',
        marginTop: 50,
        marginBottom: 20,
        width: 450,
        textAlign: 'center'
    },

    logo: {
        width: 220,
        height: 185,
        marginTop: 50
    },

    button: {
        width: 180,
        backgroundColor: '#cc0000',
        marginVertical: 30,
        paddingVertical: 12,
        marginTop: 200,
        borderRadius: 35,
        borderColor: '#000'
    },

    buttonText: {
        fontSize: 20,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: 'white',
        fontWeight: '400'
    }
})