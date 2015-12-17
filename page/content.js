import React from 'react-native';
import setChildren from '/../children';
const {
  Component,
  StyleSheet,
  View,
} = React;
 
class PageContent extends Component{

   _renderGroupedChildren() {
    var children = setChildren(this.props.children, (children, index) => {
      return (
        { children }        
      );
    });

    switch (children.length) {
      case 0:
        return null;
      case 1:
        return children[0];
      default:
        return <View>{children}</View>;
    }
  }

	render(){
		return(
			<View style={[ PageContentStyle.content ]}>
			   { this._renderGroupedChildren() }
			</View>
		)
	}
};

var PageContentStyle = StyleSheet.create({
  content:{
    alignItems: 'center',
  }
});


module.exports = PageContent;

