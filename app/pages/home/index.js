import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { List } from '@ant-design/react-native';

const ListItem = List.Item;

export default class Home extends Component {

  onHorizontalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <List>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Flex');
              }}
          >
            Flex布局
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('WingBlank');
              }}
          >
            左右留白
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('WhiteSpace');
              }}
          >
            上下留白
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Drawer');
              }}
          >
            抽屉
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Popover');
              }}
          >
            气泡
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Pagination');
              }}
          >
            分页器
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('SegmentedControl');
              }}
          >
            分段器
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('TabBar');
              }}
          >
            标签栏
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Tabs');
              }}
          >
            标签页
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Button');
              }}
          >
            按钮
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Checkbox');
              }}
          >
            复选框
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('DatePickerView');
              }}
          >
            日期选择器
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('DatePicker');
              }}
          >
            时间选择器
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('InputItem');
              }}
          >
            文本输入框
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('PickerView');
              }}
          >
            选择器
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Picker');
              }}
          >
            选择器2
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Radio');
              }}
          >
            单选框
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Switch');
              }}
          >
            滑动开关
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Slider');
              }}
          >
            滑动输入条
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Stepper');
              }}
          >
            步进器
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('SearchBar');
              }}
          >
            搜索栏
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('TextreaItem');
              }}
          >
            多行输入框
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Accordion');
              }}
          >
            手风琴
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Badge');
              }}
          >
            徽标
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Carousel');
              }}
          >
            跑马灯
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Card');
              }}
          >
            卡片
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Grid');
              }}
          >
            宫格
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Icon');
              }}
          >
            图标
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('ListView');
              }}
          >
            长列表
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('List');
              }}
          >
            列表
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('NoticeBar');
              }}
          >
            通告栏
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Steps');
              }}
          >
            步骤条
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Tags');
              }}
          >
            标签
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('ActionSheet');
              }}
          >
            动作面板
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('ActivityIndictor');
              }}
          >
            活动指示器
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Modal');
              }}
          >
            对话框
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Progress');
              }}
          >
            进度条
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Toast');
              }}
          >
            轻提示
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('SwipeAction');
              }}
          >
            滑动操作
          </ListItem>
          <ListItem
              arrow="horizontal"
              onPress={() => {
                this.props.navigation.navigate('Result');
              }}
          >
            结果页
          </ListItem>
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    backgroundColor: '#fff',
    height: 165,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
