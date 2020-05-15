import React from 'react';
import { FaHome, FaChartLine, FaDollarSign } from 'react-icons/fa';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import SideNav, { NavItem, NavIcon, NavText, Link } from './styles';

function Header() {
  return (
    <SideNav
      onSelect={(selected) => {
        // Code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <Link to="/">
              <FaHome />
            </Link>
          </NavIcon>
          <NavText>
            <Link to="/">Página Inicial</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="orcamento">
          <NavIcon>
            <Link to="/orcamento">
              <FaDollarSign />
            </Link>
          </NavIcon>
          <NavText>Orçamento</NavText>
          <NavItem eventKey="orcamento/gerar">
            <NavText>
              <Link to="/orcamento">Gerar orçamento</Link>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <FaChartLine />
          </NavIcon>
          <NavText>Charts</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Line Chart</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default Header;
