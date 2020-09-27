import React, {Component} from 'react';
import {StyleSheet, View, Linking, Text} from 'react-native';
import {COLORS} from 'Constants/Constants';

export default class LinkViewComponent extends Component {
  render() {
    let {linkText, link} = this.props;
    return (
      <View style={styles.view_container}>
        <Text style={styles.text_link} onPress={() => Linking.openURL(link)}>
          {linkText}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_container: {
    borderWidth: 3,
    borderColor: COLORS.lightPurple,
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 16,
    marginHorizontal: 8,
    paddingVertical: 4,
    overflow: 'hidden',
  },

  text_link: {
    color: '#4287f5',
    fontFamily: 'KumbhSans-Bold',
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
