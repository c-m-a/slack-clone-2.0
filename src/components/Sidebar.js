import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>SLACK 2.0</h2>
          <h3>
            <FiberManualRecordIcon />
            Cma
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 26rem;
  height: 100%;
  color: var(--sidebar-color);
  background-color: var(--sidebar-bg-color);
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 1.3rem;
  border-top: .1rem var(--sidebar-header-border-color) solid;
  border-bottom: .1rem var(--sidebar-header-border-color) solid;

  :hover {
    background-color: var(--slack-color);
  }

  > .MuiSvgIcon-root {
    padding: .8rem;
    color: var(--sidebar-bg-color);
    font-size: 3rem;
    background-color: white;
    border-radius: 50%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: .5rem;
  }

  > h3 {
    display: flex;
    font-size: 1.3rem;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 1.4rem;
    margin-top: .1rem;
    margin-right: .2rem;
    color: var(--online-color);
  }
`;
