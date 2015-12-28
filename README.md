# react-native-estylo

### Installation
Make sure that you are using babel 6 for version 1.2.0 or adove.
```bash
npm install react-native-estylo
```

### Getting started
In your `index.ios.js` file require `react-native-estylo` component:
```jsx
var Estylo = require('react-native-estylo');
```
or, if you use ES2015 syntax:
```jsx
import Estylo from 'react-native-estylo';
```

### Docs
- [Buttons](#buttons)


## Buttons
To use the button insert `<Estylo.Button>`.
Example:
```jsx
var ExampleApp = React.createClass({
  render: function() {
    return (
        <View style={[ { flex: 1, alignItems: 'center' } ]}>
          <Estylo.Button>
            Text button
          </Estylo.Button>
        </View>
    );
  }
});  
```

### Size
Larger or smaller buttons? Add `small`, `default`, `large`, `block`,or `full` for additional sizes.
Example:
```jsx
var ExampleApp = React.createClass({
  render: function() {
    return (
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }} >
          <Estylo.Button size='small' backgroundColor='#286090' textColor="#fff" >
            Size Small
          </Estylo.Button>
          <Estylo.Button size='default' >
            Size Default
          </Estylo.Button>
          <Estylo.Button size='large' backgroundColor='#5cb85c' textColor='#fff' >
            Size Large
          </Estylo.Button>
          <Estylo.Button size='block' backgroundColor='#f0ad4e' textColor='#fff' >
            Size Block
          </Estylo.Button>
          <Estylo.Button size='full' backgroundColor='#d9534f' textColor='#fff' >
            Size Full
          </Estylo.Button>
        </View>
    );
  }
});
```
![react-native-estylo button_size demo](https://res.cloudinary.com/diypu5o0f/image/upload/v1451323089/button_size_g9vy8b.png)

### BackgroundColor
To set the color of the button to add `backgroundColor`.
Example:
```jsx
<Estylo.Button size='default' backgroundColor='#286090' >
  Button Background
</Estylo.Button>
```

### TextColor
To set the text color to add `textColor`.
Example:
```jsx
<Estylo.Button size='default' textColor='#286090' >
  Button Color
</Estylo.Button>
```

### StyleButton
If you want to customize the button add `styleButton`.
Example:
```jsx
<Estylo.Button styleButton={{ borderColor:'#d9534f', borderWidth: 1, width: 100 }} >
  Button Style
</Estylo.Button>
```

### StyleText
If you want to customize the text add `styleText`.
Example:
```jsx
<Estylo.Button styleText={{ fontSize: 30, textAlign:'right' }} >
  Button Style
</Estylo.Button>
```
