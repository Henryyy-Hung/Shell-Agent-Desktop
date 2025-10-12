import styled from 'styled-components';

export const AppContainer = styled.div`
  border: none;
  overflow: hidden;
  margin: 0;
  padding: 6px;
  background-color: #c9cfd9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const AppHeader = styled.div`
  flex: 0 0 auto;
`;

export const AppContent = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: white;
  border-radius: 0 12px 12px 12px;
  & > * {
    height: 100%;
  }
`;
