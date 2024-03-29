import React from 'react';
import { View } from 'react-native';
import { Tag, WhiteSpace } from '@ant-design/react-native';
function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}
export default class BasicTagExample extends React.Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag>Basic</Tag>
        <WhiteSpace />
        <Tag selected>Selected</Tag>
        <WhiteSpace />
        <Tag disabled>Disabled</Tag>
        <WhiteSpace />
        <Tag onChange={onChange}>Callback</Tag>
        <WhiteSpace />
        <Tag
          closable
          onClose={() => {
            console.log('onClose');
          }}
          afterClose={() => {
            console.log('afterClose');
          }}
        >
          Closable
        </Tag>
        <WhiteSpace />
        <Tag small>Small and Readonly</Tag>
        <WhiteSpace />
        <Tag
          onLongPress={() => {
            console.log('onLongPress');
          }}
        >
          LongPress
        </Tag>
      </View>
    );
  }
}