import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default class BlankCardComponent extends Component {
  render() {
    return <View style={styles.view_activity_card}></View>;
  }
}
const styles = StyleSheet.create({
  view_activity_card: {
    backgroundColor: 'white',
    width: width * 0.9,
    flex: 1,
    borderRadius: 15,
    marginHorizontal: width * 0.05,
    marginVertical: 16,
    opacity:1
  },
});
