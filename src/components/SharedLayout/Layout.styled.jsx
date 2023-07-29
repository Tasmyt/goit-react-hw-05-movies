import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px 20px 20px 48px;
  border-bottom: 8px ridge #5196f5;
`;
export const Header = styled(NavLink)`
  display: inline-block;
  padding-right: 16px;
  font-size: 24px;
  font-weight: 500;

  text-decoration: none;

  &.active,
  &:hover,
  &:focus {
    color: #e69c24;
    text-decoration: underline;
  }
`;
