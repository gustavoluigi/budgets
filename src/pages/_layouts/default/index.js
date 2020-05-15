import React from 'react';
import { PropTypes } from 'prop-types';

import { Wrapper, Main } from './styles';
import Header from '../../../components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
