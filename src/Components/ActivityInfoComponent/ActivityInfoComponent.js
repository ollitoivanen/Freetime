import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {COLORS} from 'Constants/Constants';


export default class ActivityInfoComponent extends Component {
  render() {
    let {type, duration, people, inorout} = this.props;
    return (
      <View style={styles.view_activity_all_infos_container}>
        <View style={styles.view_activity_info_container}>
          <Image
            style={styles.image_info_icon}
            source={require('Freetime/src/Images/icon_type.png')}></Image>

          <Text style={styles.text_activity_info}>{type}</Text>
        </View>
        <View style={styles.view_activity_info_container}>
          <Image
            style={styles.image_info_icon}
            source={require('Freetime/src/Images/icon_duration.png')}></Image>
          <Text style={styles.text_activity_info}>{duration}</Text>
        </View>

        <View style={styles.view_activity_info_container}>
          <Image
            style={styles.image_info_icon}
            source={require('Freetime/src/Images/icon_people.png')}></Image>

          <Text style={styles.text_activity_info}>{people}</Text>
        </View>
        <View style={styles.view_activity_info_container}>
          <Text style={styles.text_activity_info}>{inorout}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_activity_all_infos_container: {
    marginStart: 20,
    marginEnd: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  view_activity_info_container: {
    borderRadius: 50,
    borderWidth: 3,
    margin: 2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderColor: COLORS.lightPurple,
    alignSelf: 'baseline',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_activity_info: {
    color: COLORS.darkPurple,
    fontSize: 14,
    marginTop: 0,
    fontFamily: 'KumbhSans-Bold',
  },
  image_info_icon: {
    height: 16,
    width: 16,
    marginRight: 4,
  },
});
