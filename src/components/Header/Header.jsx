import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <LoginLink href="/">Already a subscriber?</LoginLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: revert;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-self: end;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: revert;
    justify-items: start;
    align-items: center;
    margin-top: 16px;
  }
`;

const LoginLink = styled.a`
  font-style: italic;
  text-decoration: underline;
  color: var(--color-gray-900);
  font-size: ${14 / 16}rem;
  line-height: ${22 / 14};
  font-weight: var(--font-weight-normal);
`;

export default Header;
