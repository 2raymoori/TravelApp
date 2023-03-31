import React from 'react';
import {Button, Text, View} from 'react-native';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  onPresss = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <View>
        <Text>Class Component {this.state.count}</Text>
        <Button onPress={this.onPresss} title="sdfs" />
      </View>
    );
  }
}
export default ClassComponent;
