import styled from 'styled-components';

  export default function SidebarOption({ Icon, addChannelOption, title }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 1rem;
  cursor: pointer;

  :hover {
    background-color: var(--slack-color);
  }

  > .MuiSvgIcon-root {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  > h3 {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

const SidebarOptionChannel = styled.div`
  font-size: 1.5rem;
`;
