import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default class WelcomeCardComponent extends Component {
  render() {
    return (
      <View style={styles.view_card} key={'welcomeCard'}>
        <Text style={styles.text_welcome}>Tervetuloa!</Text>
        <Text style={styles.text_description}>
          Löydä itsellesi ja kavereillesi unohtumattomia kokemuksia Turusta
        </Text>
        <Text style={styles.text_info}>
          {'Tutki karttaa tai pyyhkäise sivulle > '}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_card: {
    width: width * 0.9,
    height: height * 0.3,
    backgroundColor: 'white',
    marginHorizontal: width * 0.05,
    borderRadius: 10,
    marginBottom: 32,
    borderWidth:2,
    borderColor:'black'
  },

  text_welcome: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 12,
    marginStart:16
  },
  text_description: {
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 16,
    marginEnd: 12,
    marginBottom: 16,
    color:'gray',
    flexShrink: 1,
  },
  text_info: {
    fontSize: 16,
    marginStart: 16,
    marginBottom: 16,
    marginEnd: 12,
    flexShrink: 1,
    fontWeight:'bold'
  },
});
