import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <AccessTimeIcon
          style={{ color: 'var(--header-color)', width: '2.2rem', height: '2.2rem' }}
        />
      </HeaderLeft>

      <HeaderSearch>
        <input
          placeholder="Search Slack Clone 2.0"
        />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon
          style={{ color: 'var(--header-color)', width: '2.2rem', height: '2.2rem' }}
        />
        <HeaderAvatar
          variant="rounded"
          // TODO: Add onClick
        />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: var(--header-bg-color);
  height: 3.8rem;
`;

const HeaderLeft = styled.div`
  flex: .485;
  display: flex;
  align-items: center;

  min-width: 13rem;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 1.8rem;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  height: 2.8rem !important;
  width: 2.8rem !important;

  :hover {
    opacity: .8;
  }
`;

const HeaderSearch = styled.div`
  opacity: 1;
  border-radius: .6rem;
  background-color: var(--header-search-bg-color);
  padding: .1rem .5rem;
  border: .1rem var(--header-search-border-bg) solid;
  height: 2.4rem;
  max-width: 50rem;
  width: 100%;

  > input {
    background-color: transparent;
    border: none;
    width: 100%;
    color: var(--search-input-color);
    outline: 0;

    /* Chrome, Firefox, Opera, Safari 10.1+ and Edge */
    ::placeholder,
    ::-ms-input-placeholder {
      color: var(--search-input-color);
    }

    /* FireFox */
    ::placeholder {
      opacity: 1;
    }

  }

  @media screen and (max-width: 1070px) {
    max-width: 32rem;
  }
`;

const HeaderRight = styled.div`
  flex: .515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 18rem;
  padding: 0 1.6rem;
`;
