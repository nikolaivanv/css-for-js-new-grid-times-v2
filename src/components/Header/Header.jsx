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
        <ActionGroupWrapper>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </ActionGroupWrapper>
        <Logo />
        <Subscribe>
          <Button>Subscribe</Button>
          <LoginLink>Already a subscriber?</LoginLink>
        </Subscribe>
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

const ActionGroupWrapper = styled.div`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: flex;
  }
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

const Subscribe = styled.div`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.laptopAndUp}) {
    justify-content: space-between;
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
