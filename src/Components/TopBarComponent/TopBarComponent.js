import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

export default class TopBarComponent extends Component {
  render() {
    let {onFilterPress} = this.props;
    return (
      <View style={styles.view_container}>
        <TouchableOpacity
          onPress={onFilterPress}
          style={styles.view_top_bar_container_left}>
          
        </TouchableOpacity>
        <View style={styles.view_top_bar_container_middle}>
          <Image
            style={styles.image_freetime_logo}
            source={require('Freetime/src/Images/freetime_logo.png')}
          />
        </View>
        <View style={styles.view_top_bar_container_right} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_container: {
    flexDirection: 'row',
  },

  view_top_bar_container_left: {
    flex: 1,
  },
  view_top_bar_container_middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view_top_bar_container_right: {
    flex: 1,
  },

  view_filter_container: {
    flexDirection: 'row',
  },

  image_filter_icon: {
    height: 36,
    width: 36,
    margin: 16,
    marginBottom: 0,
  },

  image_freetime_logo: {
    height: 36,
    width: 36,
    margin: 16,
    marginBottom: 0,
  },
});
