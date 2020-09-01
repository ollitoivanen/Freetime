import React, {Component} from 'react';
import Renderer from 'Renderer/Renderer';
import store from 'Store/Store';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Renderer/>
      </Provider>
    );
  }
}
