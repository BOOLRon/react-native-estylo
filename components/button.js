import React from 'react-native';
import Dimensions from '/../dimensions';

const {
    Component,
    PropTypes,
    TouchableOpacity,
    Text,
    StyleSheet
} = React;

class Button extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        children: PropTypes.string.isRequired,
        onLongPress: PropTypes.func,
        onPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        textColor: PropTypes.string,
        size: PropTypes.string,
        styleButton: PropTypes.object,
        styleText: PropTypes.object,
    };

    render() {
        const touchableProps = {
            onPress: this.props.onPress,
            onPressIn: this.props.onPressIn,
            onPressOut: this.props.onPressOut,
            onLongPress: this.props.onLongPress
        };
        const _size = {
            border: !this.props.backgroundColor ? { borderColor: '#cccccc', borderWidth: 1 } : null,
            button: ButtonStyle['button_size_' + this.props.size] ? ButtonStyle['button_size_' + this.props.size] : ButtonStyle['button_size_default'],
            text: ButtonStyle['text_size_' + this.props.size] ? ButtonStyle['text_size_' + this.props.size] : ButtonStyle['text_size_default'],
        };

        return ( 
            <TouchableOpacity 
                style = {[ _size.button, _size.border, this.props.styleButton, { backgroundColor: this.props.backgroundColor } ]}
                {...touchableProps} >
                <Text style = {[ _size.text, this.props.styleText, { color: this.props.textColor } ]}> 
                    { this.props.children } 
                </Text>
            </TouchableOpacity>
        )
    }
}

var ButtonStyle = StyleSheet.create({
    /** Button **/
    button_size_small: {
        height: 31,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 4,
        paddingRight: 4,
        justifyContent: 'center',
    },
    button_size_default: {
        height: 47,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
    },
    button_size_large: {
        height: 59,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'center',
    },
    button_size_block: {
        height: 47,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        width: Dimensions.getWidth() - 20,
    },
    button_size_full: {
        height: 47,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'center',
        width: Dimensions.getWidth(),
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },

    /** Text **/
    text_size_small: {
        fontSize: 12,
        textAlign: 'center',
    },
    text_size_default: {
        fontSize: 16,
        textAlign: 'center',
    },
    text_size_large: {
        fontSize: 20,
        textAlign: 'center',
    },
    text_size_block: {
        fontSize: 16,
        textAlign: 'center',
    },
    text_size_full: {
        fontSize: 16,
        textAlign: 'center',
    }
});


module.exports = Button;