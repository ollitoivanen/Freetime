import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default class FilterCardComponent extends Component {
  render() {
    return <View style={styles.view_filter_card}></View>;
  }
}
const styles = StyleSheet.create({
  view_filter_card: {
    height: 100,
    backgroundColor: 'white',
    width: width * 0.9,
    flex: 1,
    borderRadius: 15,
    marginHorizontal: width * 0.05,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
});
