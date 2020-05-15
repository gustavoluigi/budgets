import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';

// SideNav
const StyledSideNav = styled(SideNav)`
  background-color: #1f1f1f;
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

// Toggle
const StyledToggle = styled(Toggle)``;
StyledToggle.defaultProps = Toggle.defaultProps;

// Nav
const StyledNav = styled(Nav)`
  background-color: #fff;
`;
StyledNav.defaultProps = Nav.defaultProps;

// NavItem
const StyledNavItem = styled(NavItem)``;
StyledNavItem.defaultProps = NavItem.defaultProps;

// NavIcon
const StyledNavIcon = styled(NavIcon)``;
StyledNavIcon.defaultProps = NavIcon.defaultProps;

// NavText
const StyledNavText = styled(NavText)`
  color: #222;
`;
StyledNavText.defaultProps = NavText.defaultProps;

const StyledLink = styled(Link)`
  color: inherit;
`;
StyledLink.defaultProps = Link.defaultProps;

export {
  StyledToggle as Toggle,
  StyledNav as Nav,
  StyledNavItem as NavItem,
  StyledNavIcon as NavIcon,
  StyledNavText as NavText,
  StyledLink as Link,
};
export default StyledSideNav;
