import styled from 'styled-components';
import { Form, InputNumber } from 'antd';

const Input = styled(InputNumber)`
  height: 32px;
  padding: 0 11px;
  text-align: left;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  outline: 0;
  transition: all 0.3s linear;
`;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
`;

export { Input, StyledForm as Form };
