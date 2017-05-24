import React, { Component } from 'react';
import StyleSheet from '../../utils/CrossPlatformStyleSheet';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import Browser from '../Browser';

export default class Menu extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  }

  render() {
    const {style, onSelect} = this.props;

    return (
      <View style={[styles.container, style]}>
        <View style={styles.menu}>
          {Object.keys(Browser.types)
            .map((key, i) => (
              <TouchableOpacity key={key} style={styles.button}
                onPress={() => onSelect(key)}>
                <Text>{key}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#f8f8f8',
    borderRightWidth: 1,
    borderRightColor: '#cecdce'
  },
  menu: {
    marginTop: 49,
    borderTopWidth: 1,
    borderTopColor: '#cecdce'
  },
  button: {
    height: 48,
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cecdce'
  }
});
