import React from 'react';
import { PickerView } from '@ant-design/react-native';
const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];
export default class PickerViewExample extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: undefined,
    };
    this.onChange = value => {
      this.setState({
        value,
      });
    };
  }
  render() {
    return (
      <PickerView
        onChange={this.onChange}
        value={this.state.value}
        data={seasons}
        cascade={false}
      />
    );
  }
}