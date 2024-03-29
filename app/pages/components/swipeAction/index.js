import React from 'react';
import { View } from 'react-native';
import { List, SwipeAction } from '@ant-design/react-native';
export default class BasicSwipeActionExample extends React.Component {
  render() {
    const right = [
      {
        text: 'More',
        onPress: () => console.log('more'),
        style: { backgroundColor: 'orange', color: 'white' },
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ];
    const left = [
      {
        text: 'Read',
        onPress: () => console.log('read'),
        style: { backgroundColor: 'blue', color: 'white' },
      },
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        style: { backgroundColor: 'green', color: 'white' },
      },
    ];
    return (
      <View style={{ paddingTop: 30 }}>
        <List>
          <SwipeAction
              autoClose
              left={left}
              onClose={() => console.log('close')}
              onOpen={() => console.log('open')}
              right={right}
              style={{ backgroundColor: 'transparent' }}
          >
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    );
  }
}