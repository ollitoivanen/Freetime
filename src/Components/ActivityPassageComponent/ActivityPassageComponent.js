import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS, ACTIVITY_POINT_INFO_TYPES} from 'Constants/Constants';
import MapViewRouteComponent from 'MapViewRouteComponent/MapViewRouteComponent';
import MapViewPointComponent from 'MapViewPointComponent/MapViewPointComponent';
import ListViewComponent from 'ListViewComponent/ListViewComponent';
import LinkViewComponent from 'LinkViewComponent/LinkViewComponent';

export default class ActivityPassageComponent extends Component {
  _arrayActivityPassage = () => {
    let {points} = this.props;
    activityPassage = [];
    points.map((point, index) => {
      let {pointTitle, pointDescription} = point;
      let pointInfoExists = this._checkPointInfoExistance(point);
      let pointInfo;
      if (pointInfoExists) {
        pointInfo = this._fetchPointInfoType(point);
      }
      activityPassage.push(
        <View key={index} style={styles.view_point_container} key={index}>
          <View style={styles.view_point_number_and_title_container}>
            <View style={styles.view_point_number_container}>
              <Text style={styles.text_point_number}>{index + 1}</Text>
            </View>
            <Text style={styles.text_title}>{pointTitle}</Text>
          </View>
          <Text style={styles.text_description}>{pointDescription}</Text>
          {pointInfoExists ? pointInfo : null}
        </View>,
      );
    });
    return activityPassage;
  };

  _checkPointInfoExistance = (point) => {
    if (point.pointInfo !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  _fetchPointInfoType = (point) => {
    let {pointInfoType} = point.pointInfo;
    switch (pointInfoType) {
      case 'MapViewRoute':
        return (
          <MapViewRouteComponent
            coordinates={point.pointInfo.coordinates}
            initialRegion={point.pointInfo.initialRegion}
          />
        );
      case 'MapViewPoint':
        return (
          <MapViewPointComponent
            coordinates={point.pointInfo.coordinates}
            initialRegion={point.pointInfo.initialRegion}
          />
        );
      case 'ListView':
        return <ListViewComponent listItems={point.pointInfo.listItems} />;
      case 'LinkView':
        return (
          <LinkViewComponent
            linkText={point.pointInfo.linkText}
            link={point.pointInfo.link}
          />
        );
      default:
        break;
    }
  };

  render() {
    let activityPassage = this._arrayActivityPassage();
    return <View style={styles.view_container}>{activityPassage}</View>;
  }
}
const styles = StyleSheet.create({
  view_container: {
    justifyContent: 'center',
    marginBottom: 128,
    marginTop: 16,
    marginHorizontal: 8,
    paddingBottom: 64,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: COLORS.lightPurple,
  },

  view_point_container: {
    marginTop: 12,
  },

  view_point_number_and_title_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  view_point_number_container: {
    backgroundColor: COLORS.darkPurple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 30,
    width: 30,
    marginHorizontal: 8,
  },
  text_point_number: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'KumbhSans-Bold',
  },

  text_title: {
    color: COLORS.darkPurple,

    fontSize: 16,
    fontFamily: 'KumbhSans-Bold',
  },

  text_description: {
    color: COLORS.darkPurple,

    fontSize: 14,
    fontFamily: 'KumbhSans-Bold',
    marginTop: 16,
    marginHorizontal: 12,
    marginBottom: 0,
  },
});
