import React, { Component } from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from '@ant-design/react-native';
import NavigationService from '@/utils/navigation'

import Home from '@/pages/home';
import Detail from '@/pages/detail';
import My from '@/pages/my';
import Invite from '@/pages/invite';
import Login from '@/pages/login';
import AuthLoadingScreen from '@/pages/authloading';
import Flex from '@/pages/components/flex';
import WingBlank from '@/pages/components/wingblank';
import WhiteSpace from '@/pages/components/whitespace';
import DrawerExap from '@/pages/components/drawer';
import Popover from '@/pages/components/popover';
import Pagination from '@/pages/components/pagination';
import SegmentedControl from '@/pages/components/segmentedControl';
import TabBar from '@/pages/components/tabBar';
// import Tabs from '@/pages/components/tabs';
import ButtonExamp from '@/pages/components/button';
import Checkbox from '@/pages/components/checkbox';
import DatePickerView from '@/pages/components/datePickerView';
import DatePicker from '@/pages/components/datePickerView/datePicker';
import InputItem from '@/pages/components/inputItem';
import PickerView from '@/pages/components/pickerView';
import Picker from '@/pages/components/pickerView/picker';
import Radio from '@/pages/components/radio';
import Switch from '@/pages/components/switch';
import Slider from '@/pages/components/slider';
import Stepper from '@/pages/components/stepper';
import SearchBar from '@/pages/components/inputItem/searchBar';
import TextreaItem from '@/pages/components/inputItem/textreaItem';
import Accordion from '@/pages/components/accordion';
import Badge from '@/pages/components/badge';
import Carousel from '@/pages/components/carousel';
import Card from '@/pages/components/card';
import Grid from '@/pages/components/grid';
import IconExamp from '@/pages/components/icon';
import ListView from '@/pages/components/listView';
import List from '@/pages/components/list';
import NoticeBar from '@/pages/components/noticeBar';
import Steps from '@/pages/components/steps';
import Tags from '@/pages/components/tags';
import ActionSheet from '@/pages/components/actionSheet';
import ActivityIndicator from '@/pages/components/activityIndicator';
import Modal from '@/pages/components/modal';
import Progress from '@/pages/components/progress';
import Toast from '@/pages/components/toast';
import SwipeAction from '@/pages/components/swipeAction';
import Result from '@/pages/components/result';
import CouponBuy from '@/pages/coupon/buy'
import CouponExpense from '@/pages/coupon/expense'
import CouponBuyDetail from '@/pages/coupon/buyDetail'
import CouponExpenseDetail from '@/pages/coupon/expenseDetail'


/**
 * 配置底部标签
 */
const Tab = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      //stackNavigator的属性
      headerTitle: '组件',
      gestureResponseDistance: { horizontal: 300 },
      headerBackTitle: null,
      headerStyle: { backgroundColor: '#EB3695' },//导航栏的样式
      headerTitleStyle: {//导航栏文字的样式
        color: 'white',
        //设置标题的大小
        fontSize: 16,
        //居中显示
        alignSelf: 'center'
      },
      //tab 的属性
      tabBarLabel: '组件',
      tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./assets/images/home.png')}
            style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
      )

    }
  },
  My: {
    screen: My,
    navigationOptions: {
      //stackNavigator的属性
      headerTitle: '我的',
      gestureResponseDistance: { horizontal: 300 },
      headerBackTitle: null,
      headerStyle: { backgroundColor: '#EB3695' },//导航栏的样式
      headerTitleStyle: {//导航栏文字的样式
        color: 'white',
        //设置标题的大小
        fontSize: 16,
        //居中显示
        alignSelf: 'center'
      },
      //tab 的属性
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./assets/images/user.png')}
            style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
        />
      )
    }
  }
}, {
  //设置TabNavigator的位置
  tabBarPosition: 'bottom',
  //是否在更改标签时显示动画
  animationEnabled: true,
  //是否允许在标签之间进行滑动
  swipeEnabled: true,
  //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  backBehavior: "none",
  //设置Tab标签的属性

  tabBarOptions: {
    //Android属性
    upperCaseLabel: false,//是否使标签大写，默认为true
    //共有属性
    showIcon: true,//是否显示图标，默认关闭
    showLabel: true,//是否显示label，默认开启
    activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
    inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
    style: { //TabNavigator 的背景颜色
      backgroundColor: 'white',
      height: 55
    },
    indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
      height: 0
    },
    labelStyle: {//文字的样式
      fontSize: 13,
      marginTop: -5,
      marginBottom: 5
    },
    iconStyle: {//图标的样式
      marginBottom: 5
    }
  }
});

/*
 * 配置堆栈导航
 */
const Stack = createStackNavigator({
  Tab: {
    screen: Tab,
    navigationOptions: {
      headerShown: false,
      headerTitle: '首页'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: '登录'
    })
  },
  CouponBuy: {
    screen: CouponBuy,
    navigationOptions: {
      title: '点券购买'
    }
  },
  BuyDetail: {
    screen: CouponBuyDetail,
    navigationOptions: {
      title: '购买详情'
    }
  },
  CouponExpense: {
    screen: CouponExpense,
    navigationOptions: {
      title: '点券消费'
    }
  },
  ExpenseDetail: {
    screen: CouponExpenseDetail,
    navigationOptions: {
      title: '消费详情'
    }
  },
  Flex: {
    screen: Flex,
    navigationOptions: {
      title: 'Flex布局'
    }
  },
  WingBlank: {
    screen: WingBlank,
    navigationOptions: {
      title: '左右留白'
    }
  },
  WhiteSpace: {
    screen: WhiteSpace,
    navigationOptions: {
      title: '上下留白'
    }
  },
  Drawer: {
    screen: DrawerExap,
    navigationOptions: {
      title: '抽屉'
    }
  },
  Popover: {
    screen: Popover,
    navigationOptions: {
      title: '气泡'
    }
  },
  Pagination: {
    screen: Pagination,
    navigationOptions: {
      title: '分页器'
    }
  },
  SegmentedControl: {
    screen: SegmentedControl,
    navigationOptions: {
      title: '分段器'
    }
  },
  TabBar: {
    screen: TabBar,
    navigationOptions: {
      title: '标签栏'
    }
  },
  // Tabs: {
  //   screen: Tabs,
  //   navigationOptions: {
  //     title: '标签页'
  //   }
  // },
  Button: {
    screen: ButtonExamp,
    navigationOptions: {
      title: '按钮'
    }
  },
  Checkbox: {
    screen: Checkbox,
    navigationOptions: {
      title: '复选框'
    }
  },
  DatePickerView: {
    screen: DatePickerView,
    navigationOptions: {
      title: '日期选择器'
    }
  },
  DatePicker: {
    screen: DatePicker,
    navigationOptions: {
      title: '时间选择器'
    }
  },
  InputItem: {
    screen: InputItem,
    navigationOptions: {
      title: '文本输入'
    }
  },
  PickerView: {
    screen: PickerView,
    navigationOptions: {
      title: '选择器'
    }
  },
  Picker: {
    screen: Picker,
    navigationOptions: {
      title: '选择器'
    }
  },
  Radio: {
    screen: Radio,
    navigationOptions: {
      title: '单选框'
    }
  },
  Switch: {
    screen: Switch,
    navigationOptions: {
      title: '滑动开关'
    }
  },
  Slider: {
    screen: Slider,
    navigationOptions: {
      title: '滑动输入条'
    }
  },
  Stepper: {
    screen: Stepper,
    navigationOptions: {
      title: '步进器'
    }
  },
  SearchBar: {
    screen: SearchBar,
    navigationOptions: {
      title: '搜索栏'
    }
  },
  TextreaItem: {
    screen: TextreaItem,
    navigationOptions: {
      title: '多行输入框'
    }
  },
  Accordion: {
    screen: Accordion,
    navigationOptions: {
      title: '手风琴'
    }
  },
  Badge: {
    screen: Badge,
    navigationOptions: {
      title: '徽标'
    }
  },
  Carousel: {
    screen: Carousel,
    navigationOptions: {
      title: '跑马灯'
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      title: '卡片'
    }
  },
  Grid: {
    screen: Grid,
    navigationOptions: {
      title: '宫格'
    }
  },
  Icon: {
    screen: IconExamp,
    navigationOptions: {
      title: '动作面板'
    }
  },
  ListView: {
    screen: ListView,
    navigationOptions: {
      title: '列表'
    }
  },
  List: {
    screen: List,
    navigationOptions: {
      title: '列表2'
    }
  },
  NoticeBar: {
    screen: NoticeBar,
    navigationOptions: {
      title: '通知栏'
    }
  },
  Steps: {
    screen: Steps,
    navigationOptions: {
      title: '步骤条'
    }
  },
  Tags: {
    screen: Tags,
    navigationOptions: {
      title: '标签'
    }
  },
  ActionSheet: {
    screen: ActionSheet,
    navigationOptions: {
      title: '动作面板'
    }
  },
  ActivityIndicator: {
    screen: ActivityIndicator,
    navigationOptions: {
      title: '活动指示器'
    }
  },
  Modal: {
    screen: Modal,
    navigationOptions: {
      title: '对话框'
    }
  },
  Progress: {
    screen: Progress,
    navigationOptions: {
      title: '进度条'
    }
  },
  Toast: {
    screen: Toast,
    navigationOptions: {
      title: '轻提示'
    }
  },
  SwipeAction: {
    screen: SwipeAction,
    navigationOptions: {
      title: '滑动操作'
    }
  },
  Result: {
    screen: Result,
    navigationOptions: {
      title: '结果反馈'
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerTitle: '详情'
    }
  },
  //DrawerNavigator跳转的页面也必须在这里注册
  Invite: {
    screen: Invite
  }
}, {
  defaultNavigationOptions: {
    headerTitleAlign: 'center'
  }
});

const Drawer = createDrawerNavigator({
  Home: {
    screen: Stack,
    navigationOptions: {
      drawerLabel: '首页'
      // drawerIcon: ({ tintColor }) => (
      //   <Image
      //     source={require('./images/ic_home.png')}
      //     style={[styles.icon, { tintColor: tintColor }]}
      //   />
      // ),
    }
  },
  Invite: {
    screen: Invite,
    navigationOptions: {
      drawerLabel: '邀请好友'
      // drawerIcon: ({ tintColor }) => (
      //   <Image
      //     source={require('./images/invite.png')}
      //     style={[styles.icon, { tintColor: tintColor }]}
      //   />
      // ),
    }
  }
}, {
  drawerWidth: 250, // 展示的宽度
  drawerPosition: 'left' // 抽屉在左边还是右边
  // contentOptions: {
  //     // activeTintColor: 'black',  // 选中文字颜色
  //     activeBackgroundColor: '#fff', // 选中背景颜色
  //     inactiveTintColor: '#EB3695',  // 未选中文字颜色
  //     inactiveBackgroundColor: '#fff', // 未选中背景颜色
  //     style: {  // 样式
  //
  //     }
  // },
});

const AuthStack = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: {
    screen: Drawer
  },
  Auth: {
    screen: Login,
    navigationOptions: {
      //stackNavigator的属性
      headerTitle: '登录',
      gestureResponseDistance: { horizontal: 300 },
      headerBackTitle: null,
      headerStyle: { backgroundColor: '#EB3695' },//导航栏的样式
      headerTitleStyle: {//导航栏文字的样式
        color: 'white',
        //设置标题的大小
        fontSize: 16,
        //居中显示
        alignSelf: 'center'
      },
      //tab 的属性
      tabBarLabel: '我的'
      // tabBarIcon: ({tintColor}) => (
      //     <Image
      //         source={require('./images/ic_type.png')}
      //         style={[{height: 24, width: 24}, {tintColor: tintColor}]}
      //     />
      // ),
    }
  }
}, {
  initialRouteName: 'AuthLoading'
});

const AppContainer = createAppContainer(AuthStack);

export default class App extends Component {
  render() {
    return (
      <Provider>
        <AppContainer
            ref={
              navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef)
              }
          }
        />
      </Provider>
    );
  }
}
