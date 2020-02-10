import React, { Component } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { Result } from '@ant-design/react-native'

export default class ResultExam extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F5F5F9', flex: 1 }}>
        <Text style={{ margin: 10, color: '#999' }}>URI 图片</Text>
        <Result
            imgUrl={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png'
            }}
            message="所提交内容已成功完成验证"
            title="验证成功"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image source</Text>
        <Result
            message="所提交内容已成功完成验证"
            source={require('../../../assets/images/cart.png')}
            title="验证成功"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image element</Text>
        <Result
            img={
              <Image
                  source={require('../../../assets/images/cart.png')}
                  style={{ width: 60, height: 60 }}
              />
            }
            message={<Text>所提交内容已成功完成验证</Text>}
            title="验证成功"
        />

        <Text style={{ margin: 10, color: '#999' }}>含 button 操作</Text>
        <Result
            buttonText="完成"
            buttonType="primary"
            img={
              <Image
                  source={require('../../../assets/images/cart.png')}
                  style={{ width: 60, height: 60 }}
              />
            }
            message="所提交内容已成功完成验证"
            onButtonClick={(e: any) => alert(e.toString())}
            title="验证成功"
        />
      </ScrollView>
    )
  }
}
