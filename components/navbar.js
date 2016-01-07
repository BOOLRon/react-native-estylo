import React from 'react-native';
import Dimensions from '/../dimensions';

const navBarHeight = 44;
const statusBarHeight = 20;

const {
  Component,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  StatusBarIOS,
  View,
} = React;

class NavBar extends Component{

	getTitleNavBar( title, type ){
		if( title ){

			const _text = title.text ? title.text : null;
			const _color = title.color ? title.color : '#000';
			const _onPress = title.onPress ? title.onPress : null;
			const _activeOpacity = _onPress ? 0 : 1;

			return(
				<TouchableOpacity
					style={[ type, NavBarStyle.buttonText ]}
					onPress={ _onPress }
					activeOpacity={ _activeOpacity } >
						<Text style={[ NavBarStyle.titleText, { color: _color } ]}>
							{ _text }
						</Text>
				</TouchableOpacity>
			)		
		}
	}

	render(){
		const _statusBarStyle = this.props.statusBarHidden ? { height: 0 } : { height: statusBarHeight };
		const _backgroundNavBar = this.props.backgroundColor ? { backgroundColor: this.props.backgroundColor } : { backgroundColor: '#fff' } ;

		if( this.props.statusBarHidden ){
			StatusBarIOS.setHidden( true );
		}else{
			StatusBarIOS.setHidden( false );
		}

		return(
			<View style={[ NavBarStyle.navBar ]}>
				<View style={[ _statusBarStyle, _backgroundNavBar ]}></View>
				<View style={[ NavBarStyle.navBarContainer, _backgroundNavBar ]}>
					{ this.getTitleNavBar( this.props.titleCenter,  NavBarStyle.buttonTextCenter )}
					{ this.getTitleNavBar( this.props.titleLeft, NavBarStyle.buttonTextLeft )}
					{ this.getTitleNavBar( this.props.titleRight, NavBarStyle.buttonTextRight )}
				</View>
			</View>
		)
	}
}

var NavBarStyle = StyleSheet.create({
	navBar:{
		width: Dimensions.getWidth(),
	},
	navBarContainer:{
		borderColor: '#c9c9c9',
		borderBottomWidth: 1,
		height: navBarHeight,
		padding: 5,
	},
	buttonText:{
		alignItems: 'center',
		height: navBarHeight - 10,
		position: 'absolute',
		justifyContent: 'center',
	},
	buttonTextCenter:{
		right: 5,
		left: 5
	},
	buttonTextLeft:{
		left: 5
	},
	buttonTextRight:{
		right: 5,
	},
	titleText:{
		fontSize: 17,
	}
});


module.exports = NavBar;

