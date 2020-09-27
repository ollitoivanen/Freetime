import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {COLORS} from 'Constants/Constants';
import HomeScreen from 'HomeScreen/HomeScreen';
import CreateRouteScreen from 'CreateRouteScreen/CreateRouteScreen';

export default class Renderer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.view_app_container}>
        <StatusBar
          backgroundColor={COLORS.lightPurple}
          barStyle={'dark-content'}
        />
        <HomeScreen />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  view_app_container: {flex: 1, backgroundColor: '#dad6ff'},
});
