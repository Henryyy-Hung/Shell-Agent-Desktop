import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  -webkit-app-region: drag;
  user-select: none;
`

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 4px;
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
`

export const Tab = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-top: 2px;
  height: 32px;
  min-width: 96px;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
  -webkit-app-region: no-drag;
  background-color: white;
  transform: ${({ $active }) => ($active ? 'translateY(0)' : 'translateY(3px)')};
  transition: all 0.15s ease-in-out;
  color: ${({ $active }) => ($active ? 'black' : '#9c9c9c')};

  &:hover {
    background-color: white;
  }
`

export const WindowControls = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 8px;
  -webkit-app-region: no-drag;
`

export const ControlCircle = styled.button<{ color: string; $active: boolean }>`
  width: 20px;
  height: 20px;
  margin-bottom: 6px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover svg {
    stroke: rgba(255, 255, 255, 0.7) !important;
  }

  & svg {
    width: 12px !important;
    height: 12px !important;
    stroke: ${({ $active }) => ($active ? '#fff' : 'rgba(0,0,0,0.45)')} !important;
    stroke-width: 3px !important;
  }
`
