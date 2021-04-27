import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InboxIcon from '@material-ui/icons/Inbox';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import SidebarOption from './SidebarOption';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function Sidebar() {
  const [channels] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>SLACK 2.0</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channel" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map(doc => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        />
      ))}
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 26rem;
  height: 100%;
  color: var(--sidebar-color);
  background-color: var(--sidebar-bg-color);

  > hr {
    border: .1rem solid var(--sidebar-header-border-color);
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1.2rem;
  padding: 1.3rem;
  border-top: .1rem solid var(--sidebar-header-border-color);
  border-bottom: .1rem solid var(--sidebar-header-border-color);

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
