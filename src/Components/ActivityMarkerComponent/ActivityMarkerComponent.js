import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class ActivityMarkerComponent extends Component {
  render() {
    let {type, selectedActivityIndex, markerIndex} = this.props;
    let imageSource;
    switch (type) {
      case 0:
        imageSource = require('Freetime/src/Images/icon_restaurant.png');
        break;
      case 1:
        imageSource = require('Freetime/src/Images/icon_cafe.png');
        break;
      case 2:
        imageSource = require('Freetime/src/Images/icon_bar.png');
        break;
      case 3:
        imageSource = require('Freetime/src/Images/icon_sports.png');
        break;
      case 4:
        imageSource = require('Freetime/src/Images/icon_sight.png');
        break;
      case 5:
        imageSource = require('Freetime/src/Images/icon_explore.png');
        break;
      case 6:
        imageSource = require('Freetime/src/Images/icon_roadtrip.png');
        break;
      default:
        break;
    }
    return (
      <View
        style={[
          styles.view_container,
          markerIndex === selectedActivityIndex
            ? {backgroundColor: 'lightgreen'}
            : {backgroundColor: 'orange'},
        ]}>
        <Image style={styles.image_icon} source={imageSource}></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_container: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_icon: {
    height: 15,
    width: 15,
  },
});
