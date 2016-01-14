import React from 'react-native';
import Dimensions from '/../dimensions';

const navBarHeight = 44;
const statusBarHeight = 20;

const {
	Component,
	PropTypes,
	TouchableOpacity,
	Text,
	StyleSheet,
	StatusBarIOS,
	View,
} = React;

const titleShape = {
	color: PropTypes.string,
	onPress: PropTypes.func,
	onPressIn: PropTypes.func,
	onPressOut: PropTypes.func,
	onLongPress: PropTypes.func,
	text: PropTypes.string,
	style: PropTypes.object,
};
	
class NavBar extends Component{

	static propTypes = {    
		backgroundColor: PropTypes.string,
		titleCenter: PropTypes.oneOfType([
      		PropTypes.shape( titleShape ),
      		PropTypes.element,
    	]),
		titleLeft: PropTypes.oneOfType([
      		PropTypes.shape( titleShape ),
      		PropTypes.element,
    	]),
		titleRight: PropTypes.oneOfType([
      		PropTypes.shape( titleShape ),
      		PropTypes.element,
    	]),
	};


	getTitleNavBar( title, type ){
		if( title ){
			const touchableProps = {
            	onPress: title.onPress,
            	onPressIn: title.onPressIn,
            	onPressOut: title.onPressOut,
            	onLongPress: title.onLongPress
        	};
			const _activeOpacity = !title.onPress && !title.onPressIn && !title.onPressOut && !title.onLongPress ? 1 : 0;

			return(
				<TouchableOpacity
					style={[ type, NavBarStyle.buttonText ]}
					activeOpacity={ _activeOpacity } 
					{...touchableProps}>
					<Text style={[ NavBarStyle.titleText, { color: title.color }, title.style ]}>
						{ title.text }
					</Text>
				</TouchableOpacity>
			)		
		}
	}

	render(){
		const _statusBarStyle = this.props.statusBarHidden ? { height: 0 } : { height: statusBarHeight };
		this.props.statusBarHidden ? StatusBarIOS.setHidden( true ) : StatusBarIOS.setHidden( false );
		
		return(
			<View style={[ NavBarStyle.navBar ]}>
				<View style={[ _statusBarStyle, { backgroundColor: this.props.backgroundColor } ]}></View>
				<View style={[ NavBarStyle.navBarContainer, { backgroundColor: this.props.backgroundColor } ]}>
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
		backgroundColor: '#fff',
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
		color: '#000'
	}
});


module.exports = NavBar;