import React, { Component } from 'react';
import { Button, Form } from 'antd';

import { Input } from './styles';

export default class Orcamento extends Component {
  state = {
    valor1: '',
    valor2: '',
    soma: '',
  };

  onChangeValue = (name, value) => {
    this.setState({ [name]: value });
  };

  onSubmitValues = () => {
    const { valor1, valor2 } = this.state;
    const soma = valor1 + valor2;
    this.setState({ soma });
  };

  render() {
    const { soma } = this.state;
    return (
      <>
        <Form>
          <Input
            type="text"
            onChange={this.onChangeValue.bind(this, 'valor1')}
          />

          <Input
            type="text"
            onChange={this.onChangeValue.bind(this, 'valor2')}
          />

          <Button
            type="primary"
            htmlType="submit"
            onClick={this.onSubmitValues}
          >
            Submit
          </Button>
          <p>{soma}</p>
        </Form>
      </>
    );
  }
}
