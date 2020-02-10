import React from 'react';
import { Text, View } from 'react-native';
import { WhiteSpace, WingBlank } from '@ant-design/react-native';

const PlaceHolder = props => (
  <View
    style={{
      backgroundColor: '#eee',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}
  >
    <Text style={{ color: '#bbb' }}>Block</Text>
  </View>
);

export default class WingBlankExample extends React.Component {
  render() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank>
          <PlaceHolder />
        </WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <PlaceHolder />
        </WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm">
          <PlaceHolder />
        </WingBlank>
      </View>
    );
  }
}