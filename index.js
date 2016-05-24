/** Components **/
import ReactNative from 'react-native';
import React form 'react';
import Dimensions from './dimensions';

import buttonFactory from './components/button';
import navBarFactory from './components/navbar';
import textInputFactory from './components/text-input';

const Button = buttonFactory({ React,ReactNative, Dimensions });
const NavBar = navBarFactory({ React,ReactNative, Dimensions });
const TextInput = textInputFactory({ React,ReactNative,Dimensions });

module.exports = {
	Button,
	NavBar,
	TextInput,
};

