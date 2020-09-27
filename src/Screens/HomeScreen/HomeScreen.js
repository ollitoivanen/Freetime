import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {COLORS, ACTIVITIES, TERVETULOA} from 'Constants/Constants';
import {ActionLoadActivities} from 'ActionLoadActivities/ActionLoadActivities';
import TopBarComponent from 'TopBarComponent/TopBarComponent';
import ActivityCardComponent from 'ActivityCardComponent/ActivityCardComponent';
import WelcomeCardComponent from 'WelcomeCardComponent/WelcomeCardComponent';

import BlankCardComponent from 'BlankCardComponent/BlankCardComponent';
import FilterCardComponent from 'FilterCardComponent/FilterCardComponent';
const {width, height} = Dimensions.get('screen');
import {connect} from 'react-redux';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 0,
      activities: [],
    };
  }

  componentDidMount = () => {
    this._shuffleActivities();
  };

  _shuffleActivities() {
    let welcomeArray = [TERVETULOA];
    let array = ACTIVITIES;
    let currentIndex = array.length,
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
    //this.props.ActionLoadActivities(array);
    let finishedArray = welcomeArray.concat(array);
    this.setState({activities: finishedArray}, () => {
      this._arrayMapCards([0, 1, 2]);
    });
  }

  _onFilterPress = () => {
    console.warn('painettu');
  };

  _getInterval = (offset) => {
    let {interval} = this.state;
    let newInterval = Math.round(offset / width);
    if (newInterval !== interval) {
      if (newInterval === 0) {
        this._arrayMapCards([0, 1, 2]);
      } else {
        this._arrayMapCards([newInterval - 1, newInterval, newInterval + 1]);
      }
      this.setState({interval: newInterval});
    }
  };

  _arrayMapCards = (array) => {
    let {activities, interval} = this.state;
    let activityCards = [];
    activities.map((activity, index) => {
      if (index < array[0]) {
        activityCards.push(<BlankCardComponent key={index} />);
      } else if (index > array[2]) {
      } else {
        let {imageSource, name, description, points} = activity;

        if (index===0) {
          activityCards.push(
            <WelcomeCardComponent
              key={name}
              imageSource={imageSource}
              name={name}
              description={description}
            />,
          );
        } else {
          activityCards.push(
            <ActivityCardComponent
              key={name}
              imageSource={imageSource}
              name={name}
              description={description}
              points={points}
            />,
          );
        }
      }
    });

    this.setState({activityCards});
  };

  render() {
    let {activityCards} = this.state;
    return (
      <View style={styles.view_container}>
        <TopBarComponent onFilterPress={this._onFilterPress} />
        <ScrollView
          ref={(ref) => (this.scrollView = ref)}
          onMomentumScrollEnd={(data) =>
            this._getInterval(data.nativeEvent.contentOffset.x)
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          pagingEnabled={true}>
          {activityCards}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_container: {
    backgroundColor: COLORS.lightPurple,
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    activities: state.ReducerLoadActivities.activities,
  };
};
export default connect(mapStateToProps, {ActionLoadActivities})(HomeScreen);
