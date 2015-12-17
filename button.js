import React from 'react-native';
import Dimensions from './dimensions';
const {
  Component,
  TouchableOpacity,
  Text,
  StyleSheet
} = React;

class Button extends Component{
	
	constructor(props) {
   		super(props);
    	this.state = {
   			_styleButton: this.props.styleButton || null,
   			_styleText: this.props.styleText || null,
    	};
	}

	componentDidMount() {
		var classButton = this.props.class || null,
			styleButton = this.state._styleButton,
			styleBackground = { backgroundColor: this.props.background || null },
			styleText = this.state._styleText,
			styleColor = { color: this.props.color || null };

		styleText = styleText ? [ styleText, styleColor ] : [ ButtonStyle[ 'button_text_' + classButton ], styleColor ];
		styleButton = classButton ? [ ButtonStyle[ 'button_' + classButton ] , styleButton, styleBackground ] : [ ButtonStyle[ 'button_normal' ], styleButton, styleBackground ];

		this.setState({
			_styleButton: styleButton,
			_styleText: styleText,
		});
	}

	render(){
		return(
			<TouchableOpacity style={ this.state._styleButton } onPress={ this.props.onPress }>
				<Text style={ this.state._styleText }>{ this.props.text }</Text>
			</TouchableOpacity>
		)
	}
};

var ButtonStyle = StyleSheet.create({
  
	/** Button **/
	button_normal:{
		height: 45,
		paddingLeft: 12,
		paddingRight: 12,
		justifyContent: 'center',
	},
	button_full:{
		height: 45,
		marginTop: 10,
		marginBottom: 10,
		paddingLeft: 12,
		paddingRight: 12,
		justifyContent: 'center', 
		width: Dimensions.getWidth(),
	},
	button_small:{
		height: 26,
		paddingTop: 2,
		paddingLeft: 4,
		paddingRight: 4,
		paddingBottom: 1,
		borderRadius: 2,
		justifyContent: 'center',
	},
	button_large:{
		height: 57,
		paddingLeft: 16,
		paddingRight: 16,
		borderRadius: 2,
		justifyContent: 'center',
	},
	button_outline:{
		height: 45,
		paddingLeft: 12,
		paddingRight: 12,
		justifyContent: 'center',
	},
	button_clear:{
		height: 45,
		paddingLeft: 6,
		paddingRight: 6,
		justifyContent: 'center',
	},

	/** Text **/
	button_text_normal:{
		fontSize: 16,
		textAlign: 'center'
	},
	button_text_full:{
		fontSize: 16,
		textAlign: 'center',
	},
	button_text_small:{
		fontSize: 12,
		textAlign: 'center',
	},
	button_text_large:{
		fontSize: 20,
		textAlign: 'center',
	},
	button_text_outline:{
		fontSize: 16,
		textAlign: 'center',
	},
	button_text_clear:{
		fontSize: 16,
		textAlign: 'center',
	}
});


module.exports = Button;

