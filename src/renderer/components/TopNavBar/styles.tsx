import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  -webkit-app-region: drag;
  user-select: none;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 4px;
`;

export const Tab = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0 16px;
  line-height: 32px;
  min-width: 80px;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #e8e8e8;
  -webkit-app-region: no-drag;
  background-color: white;
  color: ${({ active }) => (active ? 'black' : '#9c9c9c')};

  &:hover {
    background-color: white;
  }
`;

export const WindowControls = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 8px;
  -webkit-app-region: no-drag;
`;

export const ControlCircle = styled.button<{ color: string; active: boolean }>`
  width: 20px;
  height: 20px;
  margin-bottom: 8px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  & svg {
    width: 12px !important;
    height: 12px !important;
    stroke: ${({ active }) => (active ? '#fff' : 'rgba(0,0,0,0.3)')} !important;
  }

  &:hover svg {
    stroke: white !important;
  }
`;
