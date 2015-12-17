import React from 'react-native';
import Dimensions from '/../dimensions';
const {
  Component,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  StatusBarIOS,
  PropTypes,
  NativeModules,
  NativeAppEventEmitter,
} = React;
 
const StatusBarHeight = 20;
const NavBarHeight = 44;
const WidthScreen = 0;

class NavBar extends Component{
	
	static propTypes = {
    	title: PropTypes.string.isRequired,
  	}

	getTitle( title ){
		return <Text style={[ NavBarStyle.navbar_title ]}>{ title }</Text>;
	}

	render(){
		var statusBar = !this.props.hideStatusBar ? <View style={[ NavBarStyle.statusBar ]}></View> : null;
		return(
			<View>
				{ statusBar }		
				<View style={[ NavBarStyle.navbar_header ]}>
					{ this.getTitle( this.props.title ) }
				</View>
			</View>
		)
	}
};

var NavBarStyle = StyleSheet.create({
	statusBar:{
		height: StatusBarHeight,
	},
  	navbar_header:{
  		height: 44,
  		padding: 5,
  		top: 0,
  		justifyContent: 'center',
  		borderColor: '#d3d3d3',
  		borderBottomWidth: 1,
  	},
  	navbar_title:{
  		fontSize: 17,
  		marginRight: 10,
  		marginLeft: 10,
  		textAlign: 'center',
  		color: '#000',
  	}
});


module.exports = NavBar;

