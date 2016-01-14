'use strict';
import React from 'react-native';
import _Dimensions from '/../react-native/Libraries/Utilities/Dimensions';
const {
  Component,
} = React;

var Dimensions = {
  
  getWidth: function(){
    return _Dimensions.get('window').width;
  },

  getHeight: function(){
    return _Dimensions.get('window').height;
  }

};

module.exports = Dimensions;
