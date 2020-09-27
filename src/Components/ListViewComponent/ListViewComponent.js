import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {COLORS} from 'Constants/Constants';

export default class ListViewComponent extends Component {
  render() {
    let {listItems} = this.props;
    return (
      <View style={styles.view_container}>
        {listItems.map((item, index) => {
          return (
            <Text key={index} style={styles.text_list_item}>
              {item}
            </Text>
          );
        })}
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

  text_list_item: {
    color: COLORS.darkPurple,
    fontFamily: 'KumbhSans-Bold',
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
