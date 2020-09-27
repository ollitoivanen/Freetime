import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text,TextInput} from 'react-native';
import MapViev, {Polyline} from 'react-native-maps';

export default class CreateRouteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
      drawPolyline: false,
      text: 'helloo',
    };
  }
  _addPoint = (coordinate) => {
    let points = this.state.points;
    points.push({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
    this.setState({points});
  };

  _finish = () => {
    let {drawPolyline, points} = this.state;
    this.setState({
      drawPolyline: !drawPolyline,
      text: points.map((point) => {
        return (
          '{latitude: ' +
          point.latitude +
          
          ', longitude: ' +
          point.longitude +
          '},'
        );
      }),
    });
    
  };

  render() {
    let {points, drawPolyline, text} = this.state;
    let polyline;
    if (drawPolyline) {
      polyline = <Polyline coordinates={points} />;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._finish}>
          <Text style={{margin: 16}}>Valmis</Text>
        </TouchableOpacity>
    <TextInput>{text}</TextInput>

        <MapViev
          onPress={(event) => this._addPoint(event.nativeEvent.coordinate)}
          style={{flex: 1}}
          mapType={'hybrid'}
          initialRegion={{
            latitude: 60.434511,
            longitude: 22.237683,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
          }}>
          {drawPolyline ? polyline : null}
        </MapViev>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

