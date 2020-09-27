import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Dimensions,
  Animated,
} from 'react-native';
import {COLORS} from 'Constants/Constants';
import ActivityInfoComponent from 'ActivityInfoComponent/ActivityInfoComponent';
import ActionLoadActivities from 'ActionLoadActivities/ActionLoadActivities';

import ActivityDescriptionComponent from 'ActivityDescriptionComponent/ActivityDescriptionComponent';
import ActivityPassageComponent from 'ActivityPassageComponent/ActivityPassageComponent';
const {width, height} = Dimensions.get('screen');
import {connect} from 'react-redux';

class ActivityCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.animatedValue = new Animated.Value(1);
  }
  componentDidMount = () => {
    this.setState({loading: false});
  };
  render() {
    let {loading} = this.state;
    let {imageSource, name, description} = this.props;
    if (loading) {
      return (
        <Animated.View style={styles.view_activity_card_blank}></Animated.View>
      );
    } else {
      return (
        <Animated.View
          style={[styles.view_activity_card, {opacity: this.animatedValue}]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={styles.image_activity} source={imageSource}></Image>
            <View style={styles.view_activity_name_container}>
              <Text style={styles.text_activity_name}>{name}</Text>
            </View>
            <View style={styles.view_container}>
              <Text style={styles.text_description}>{description}</Text>
            </View>
          </ScrollView>
        </Animated.View>
      );
    }
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
    overflow: 'hidden',
  },
  view_activity_card_blank: {
    backgroundColor: 'white',
    width: width * 0.9,
    flex: 1,
    borderRadius: 15,
    marginHorizontal: width * 0.05,
    marginVertical: 16,

    overflow: 'hidden',
  },
  view_container: {
    marginHorizontal: 20,
    marginTop: 8,
  },

  view_activity_name_container: {
    margin: 20,
  },

  text_activity_name: {
    color: COLORS.darkPurple,
    fontSize: 36,
    marginHorizontal: 12,
    marginVertical: 8,
    fontFamily: 'KumbhSans-Bold',
  },
  text_description: {
    color: COLORS.darkPurple,
    fontSize: 20,
    fontFamily: 'KumbhSans-Bold',
    marginVertical: 10,
    marginHorizontal: 10,
  },

  image_activity: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    activities: state.ReducerLoadActivities.activities,
  };
};
export default connect(mapStateToProps, {
  ActionLoadActivities,
})(ActivityCardComponent);
