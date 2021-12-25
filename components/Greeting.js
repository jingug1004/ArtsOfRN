import React from 'react';
import {Text, View} from 'react-native';

function Greeting(props) {
  return (
    <View>
      <Text>안녕하세요 {props.name}sdfsdf</Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: '리액트 네이티비1234',
};

export default Greeting;
