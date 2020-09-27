import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, mapStyle} from 'Constants/Constants';
import MapView, {Marker} from 'react-native-maps';

export default class MapViewPointComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapActivated: false,
    };
  }
  _activateMap = () => {
    let {mapActivated} = this.state;
    this.setState({mapActivated: !mapActivated});
  };

  render() {
    let {mapActivated} = this.state;
    let {coordinates, initialRegion} = this.props;
    return (
      <View style={styles.view_container}>
        <MapView
          mapType={'standard'}
          scrollEnabled={mapActivated}
          style={styles.view_map}
          initialRegion={initialRegion}>
          <Marker coordinate={coordinates} />
        </MapView>
        <TouchableOpacity
          activeOpacity={1.0}
          onPress={this._activateMap}
          style={[
            styles.view_activate_map_button,
            mapActivated
              ? {backgroundColor: COLORS.darkPurple}
              : {backgroundColor: COLORS.lightPurple},
          ]}>
          <Image
            style={styles.image_move}
            source={require('Freetime/src/Images/icon_move.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_container: {
    height: 300,
    borderWidth: 3,
    borderColor: COLORS.lightPurple,
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 16,
    marginHorizontal: 8,
    overflow: 'hidden',
  },

  view_activate_map_button: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 8,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view_map: {
    flex: 1,
    borderRadius: 15,
  },

  image_move: {
    height: 16,
    width: 16,
  },
});
