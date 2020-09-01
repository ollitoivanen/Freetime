import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import MapView, {Marker, Overlay} from 'react-native-maps';
import ActivityMarkerComponent from 'ActivityMarkerComponent/ActivityMarkerComponent';
import WelcomeCardComponent from 'WelcomeCardComponent/WelcomeCardComponent';
import {mapStyle, ACTIVITY_TYPES} from 'Constants/Constants';
import {ActionChangeCurrentScreen} from 'ActionChangeCurrentScreen/ActionChangeCurrentScreen';
import {ActionChangeSelectedActivity} from 'ActionChangeSelectedActivity/ActionChangeSelectedActivity';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('screen');

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(height * 0.3);

    this.state = {
      loading: true,
      activities: [],
      interval: -1,
      activityCardExpanded: false,
      selectedActivityIndex: -1,

      region: {
        latitude: 60.437084,
        longitude: 22.264277,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      },
    };
  }

  componentDidMount = () => {
    this._checkNeedForRefreshing();
  };

  _checkNeedForRefreshing = () => {
    firestore()
      .collection('RefreshInit')
      .doc('RefreshDoc')
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.data().needsRefreshing) {
          this._fetchActivities();
        } else {
          this._fetchActivitiesFromDevice();
        }
      });
  };

  _fetchActivities = () => {
    let activities = [];
    firestore()
      .collection('Activities')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          const {
            name,
            description,
            type,
            coordinates,
            photosLink,
            website
          } = documentSnapshot.data();
          activities.push({
            id: documentSnapshot.id,
            name,
            description,
            type,
            coordinates,
            photosLink,
            website
          });
        });
      })
      .then(() => {
        let serializedActivities = JSON.stringify(activities);
        this._saveActivitiesToDevice(serializedActivities).then(() => {
          this._fetchActivitiesFromDevice();
        });
      });
  };

  _saveActivitiesToDevice = async (serializedActivities) => {
    try {
      await AsyncStorage.setItem('Activities', serializedActivities);
    } catch (error) {
      // Error saving data
    }
  };

  _fetchActivitiesFromDevice = async () => {
    try {
      const activities = await AsyncStorage.getItem('Activities');
      const parsedActivities = JSON.parse(activities);
      if (parsedActivities !== null) {
        let shuffledActivities = this._shuffleActivities(parsedActivities);

        this.setState({activities: shuffledActivities, loading: false});
      } else {
        this._fetchActivities();
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  _shuffleActivities(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  _onActivityMarkerPress = (activity, index) => {
    let coordinates = {
      latitude: activity.coordinates._latitude,
      longitude: activity.coordinates._longitude,
    };
    this._zoomToSelectedActivity(coordinates);
    this._changeSelectedActivity(activity, index);
    this._scrollCardToPressedActivity(index);
  };

  _onCardScroll = (activity, index) => {
    let coordinates = {
      latitude: activity.coordinates._latitude,
      longitude: activity.coordinates._longitude,
    };
    this._zoomToSelectedActivity(coordinates);
    this._changeSelectedActivity(activity, index);
  };

  _zoomToSelectedActivity = (coordinates) => {
    this.mapView.animateToRegion({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      latitudeDelta: 0.08,
      longitudeDelta: 0.08,
    });
  };

  _changeSelectedActivity = (activity, index) => {
    this.setState({selectedActivityIndex: index});
    this.props.ActionChangeSelectedActivity(activity);
  };

  _scrollCardToPressedActivity = (index) => {
    this.setState({interval: index});
    //+1 makes sure that welcome card works properly
    this.scrollView.scrollTo({
      x: 0 + width * (index + 1),
      y: 0,
      animated: true,
    });
  };

  _arrayMapActivityMarkers = () => {
    let {activities, selectedActivityIndex} = this.state;

    return activities.map((activity, index) => {
      return (
        <Marker
          onPress={() => this._onActivityMarkerPress(activity, index)}
          key={activity.id}
          coordinate={{
            latitude: activity.coordinates._latitude,
            longitude: activity.coordinates._longitude,
          }}>
          <ActivityMarkerComponent
            type={activity.type}
            selectedActivityIndex={selectedActivityIndex}
            markerIndex={index}></ActivityMarkerComponent>
        </Marker>
      );
    });
  };

  _arrayMapCards = () => {
    let {activities, activityCardExpanded} = this.state;
    let activityCards = [
      <WelcomeCardComponent key={'welcomeCard'}></WelcomeCardComponent>,
    ];
    activities.map((activity) => {
      activityCards.push(
        <Animated.View
          key={activity.id}
          style={[styles.view_card, {height: this.animatedValue}]}>
          <TouchableOpacity
            activeOpacity={1.0}
            onPress={this._onActivityCardPress}
            style={{flex: 1}}>
            <Text
              numberOfLines={activityCardExpanded ? 4 : 2}
              style={styles.text_activity_name}>
              {activity.name}
            </Text>
            {activityCardExpanded ? (
              <Text style={styles.text_activity_type} numberOfLines={1}>
                {'Tyyppi: ' + ACTIVITY_TYPES[activity.type]}
              </Text>
            ) : null}
            <Text
              style={styles.text_activity_description}
              numberOfLines={activityCardExpanded ? 200 : 4}>
              {activity.description}
            </Text>
            {activityCardExpanded ? (
              <Text
                onPress={() => Linking.openURL(activity.website)}
                style={styles.text_activity_website}
                numberOfLines={1}>
                {"Paikan nettisivut"}
              </Text>
            ) : null}
            <Text
              onPress={() => Linking.openURL(activity.photosLink)}
              style={styles.text_link}
              numberOfLines={1}>
              {'Kuvia >'}
            </Text>
          </TouchableOpacity>
          <Text style={[styles.text_tap_for_more]} numberOfLines={1}>
            {activityCardExpanded
              ? 'Napauttamalla näytä vähemmän'
              : 'Napauttamalla lisätietoja'}
          </Text>
        </Animated.View>,
      );
    });
    return activityCards;
  };

  _onActivityCardPress = () => {
    let {activityCardExpanded, containerHeight} = this.state;
    if (!activityCardExpanded) {
      this.setState({activityCardExpanded: !activityCardExpanded});
      Animated.timing(this.animatedValue, {
        toValue: containerHeight - 64,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      this.setState({activityCardExpanded: !activityCardExpanded});
      Animated.timing(this.animatedValue, {
        toValue: height * 0.3,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  _getInterval = (offset) => {
    let {interval} = this.state;
    let {activities} = this.state;
    //-1 takes into consideration the welcome card
    let newInterval = Math.round(offset / width) - 1;
    if (newInterval !== interval) {
      this.setState({interval: newInterval});
      if (newInterval !== -1) {
        //newInterval == index
        this._onCardScroll(activities[newInterval], newInterval);
      } else {
        //Doesnt disable selected activity
        this._onWelcomeCardScroll();
      }
    }
  };

  _onWelcomeCardScroll = () => {
    this.setState({selectedActivityIndex: -1});
    this._zoomToDefaultView();
  };

  _zoomToDefaultView = () => {
    this.mapView.animateToRegion({
      latitude: 60.437084,
      longitude: 22.264277,
      latitudeDelta: 0.08,
      longitudeDelta: 0.08,
    });
  };

  render() {
    let {region, loading} = this.state;
    let activityMarkers = this._arrayMapActivityMarkers();
    let activityCards = this._arrayMapCards();

    let activityCardComponent = (
      <View style={styles.view_card_container}>
        <ScrollView
          ref={(ref) => (this.scrollView = ref)}
          onMomentumScrollEnd={(data) =>
            this._getInterval(data.nativeEvent.contentOffset.x)
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1000}
          pagingEnabled
          decelerationRate="fast">
          {activityCards}
        </ScrollView>
      </View>
    );

    return (
      <View
        style={styles.view_container}
        onLayout={(event) => {
          var {x, y, width, height} = event.nativeEvent.layout;
          this.setState({containerHeight: height});
        }}>
        <MapView
          ref={(ref) => (this.mapView = ref)}
          customMapStyle={mapStyle}
          style={styles.view_map}
          provider={'google'}
          initialRegion={region}>
          {!loading ? activityMarkers : null}
        </MapView>
        {!loading ? activityCardComponent : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_container: {
    flex: 1,
  },
  view_map: {
    flex: 2,
  },
  view_info_container: {
    flex: 1,
    backgroundColor: 'beige',
  },

  view_card_container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
  },
  view_card: {
    width: width * 0.9,
    backgroundColor: 'white',
    marginHorizontal: width * 0.05,
    borderRadius: 10,
    marginBottom: 32,
    borderWidth: 2,
    borderColor: 'black',
  },

  text_activity_name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginStart: 16,
    margin: 12,
  },

  text_activity_type: {
    fontSize: 16,
    marginStart: 16,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#403f3f',
  },
  text_activity_description: {
    fontSize: 14,
    marginStart: 16,
    marginBottom: 16,
    marginEnd: 12,
    flexShrink: 1,
    fontWeight: 'bold',
    color: 'gray',
  },

  text_activity_website: {
    fontSize: 18,
    marginStart: 16,
    marginBottom: 16,
    marginEnd: 12,
    flexShrink: 1,
    fontWeight: 'bold',
    color: '#4287f5',
  },

  text_link: {
    position: 'absolute',
    bottom: 16,
    fontSize: 14,
    marginStart: 16,
    marginBottom: 16,
    marginEnd: 12,
    flexShrink: 1,
    color: '#4287f5',
    fontWeight: 'bold',
  },
  text_tap_for_more: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 12,
    fontSize: 14,
    marginStart: 16,
    marginEnd: 12,
    flexShrink: 1,
    color: 'lightgray',
    fontWeight: 'bold',
  },
});
const mapStateToProps = (state) => {
  return {
    currentScreen: state.ReducerChangeCurrentScreen.currentScreen,
    selectedActivity: state.ReducerChangeSelectedActivity.selectedActivity,
  };
};
export default connect(mapStateToProps, {
  ActionChangeCurrentScreen,
  ActionChangeSelectedActivity,
})(HomeScreen);
