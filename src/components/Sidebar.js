import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
      </SidebarHeader>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 26rem;
  height: 100%;
  color: var(--sidebar-color);
  background-color: var(--sidebar-bg);
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
