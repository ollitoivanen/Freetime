import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from 'Constants/Constants';

export default class ActivityDescriptionComponent extends Component {
  render() {
    let {description} = this.props;
    return (
      <View style={styles.view_container}>
        <Text style={styles.text_description}>{description}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_container: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: COLORS.lightPurple,
    marginHorizontal: 20,
    marginTop: 8,
  },
  text_description: {
    color: COLORS.darkPurple,
    fontSize: 14,
    fontFamily: 'KumbhSans-Bold',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
