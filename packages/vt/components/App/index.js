import React, { Component } from 'react';
import StyleSheet from '../../utils/CrossPlatformStyleSheet';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import {
  Provider
} from 'react-redux';
import PanelSlider from '../PanelSlider';
import configureStore from '../../store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <PanelSlider />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default App;
