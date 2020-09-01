import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {HOME_SCREEN} from 'Constants/Constants';
import HomeScreen from 'HomeScreen/HomeScreen';
import {connect} from 'react-redux';

class Renderer extends Component {
  render() {
    let {currentScreen} = this.props;
    let rendered;
    switch (currentScreen) {
      case HOME_SCREEN:
        rendered = <HomeScreen />;
        break;
      default:
        break;
    }
    return (
      <SafeAreaView style={styles.view_app_container}>{rendered}</SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  view_app_container: {flex: 1, backgroundColor: 'beige'},
});

const mapStateToProps = (state) => {
  return {
    currentScreen: state.ReducerChangeCurrentScreen.currentScreen,
  };
};
export default connect(mapStateToProps, {})(Renderer);
