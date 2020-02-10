import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { ListView, List } from '@ant-design/react-native';

const ListItem = List.Item;

export default class DataList extends Component {
  // static navigationOptions = ({ navigation, screenProps }) => ({
  //   headerTitle: '列表',
  //   gestureResponseDistance: { horizontal: 300 },
  //   headerBackTitle: null,
  //   // headerStyle: styles.headerStyle,
  //   // headerTitleStyle: styles.headerTitleStyle,
  //   headerTintColor: 'white',
  //   headerRight: () => <View />,
  // });

  state = {
    layout: 'list',
  };

  sleep = (time: any) =>
    new Promise(resolve => setTimeout(() => resolve(), time));

  onFetch = async (
    page = 1,
    startFetch: (arg0: string[], arg1: number) => void,
    abortFetch: () => void,
  ) => {
    try {
      //This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 30;
      if (this.state.layout === 'grid') pageLimit = 60;
      const skip = (page - 1) * pageLimit;

      //Generate dummy data
      let rowData = Array.from(
        { length: pageLimit },
        (_, index) => `item -> ${index + skip}`,
      );

      //Simulate the end of the list if there is no more data returned from the server
      if (page === 3) {
        rowData = [];
      }

      //Simulate the network loading in ES7 syntax (async/await)
      await this.sleep(2000);
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch(); //manually stop the refresh or pagination if it encounters network error
    }
  };

  _toDetail() {
    this.props.navigation.navigate('Detail');
  }

  renderItem = (item: any) => {
    // return (
    //   <View style={{ padding: 10 }}>
    //     <Text>{item}</Text>
    //   </View>
    // );
    return (
      <ListItem
        // thumb={<Image source={require('../../assets/images/cart.png')} />}
        // thumb="1111"
        onPress={() => this._toDetail()}
        // arrow="horizontal"
        align="middle">
        <Text>{item}</Text>
      </ListItem>
    );
  };

  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item: any, index: any) =>
          `${this.state.layout} - ${item} - ${index}`
        }
        renderItem={this.renderItem}
        numColumns={this.state.layout === 'list' ? 1 : 3}
      />
    );
  }
}
