/** Components **/
import React from 'react-native';
import Dimensions from './dimensions';

import buttonFactory from './components/button';
import navBarFactory from './components/navbar';

const Button = buttonFactory({ React, Dimensions });
const NavBar = navBarFactory({ React, Dimensions });

module.exports = {
	Button,
	NavBar,
};

