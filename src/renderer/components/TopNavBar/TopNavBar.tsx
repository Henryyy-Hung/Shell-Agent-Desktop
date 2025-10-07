import React, { useState } from 'react';
import { TabEnum, TabEnumType } from '../../enums/TabEnum';
import {
  NavContainer,
  TabsWrapper,
  Tab,
  WindowControls,
  ControlCircle,
} from './styles';
import IconPin from '../../assets/vectors/IconPin';
import IconClose from '../../assets/vectors/IconClose';
import IconMinimize from '../../assets/vectors/IconMinimize';

interface Props {
  currentTab: TabEnumType;
  onTabChange: (tab: TabEnumType) => void;
}

const tabTitles: Record<TabEnumType, string> = {
  [TabEnum.Chat]: '终端助手',
  [TabEnum.Memory]: '流程资产',
  [TabEnum.Settings]: '设置',
};

export default function TopNavBar({ currentTab, onTabChange }: Props) {
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);

  const toggleAlwaysOnTop = async () => {
    const currentState = (await window.api.toggleAlwaysOnTop()) || false;
    setIsAlwaysOnTop(currentState);
  };

  const minimizeWindow = () => {
    window.api.minimizeWindow();
  };

  const closeWindow = () => {
    window.api.closeWindow();
  };

  return (
    <NavContainer>
      <TabsWrapper>
        {Object.values(TabEnum).map((tab) => (
          <Tab
            key={tab}
            active={currentTab === tab}
            onClick={() => onTabChange(tab)}
          >
            {tabTitles[tab]}
          </Tab>
        ))}
      </TabsWrapper>
      <WindowControls>
        <ControlCircle
          color="#00AEEF"
          active={isAlwaysOnTop}
          onClick={toggleAlwaysOnTop}
        >
          <IconPin />
        </ControlCircle>
        <ControlCircle color="#fbbd2e" active={false} onClick={minimizeWindow}>
          <IconMinimize />
        </ControlCircle>
        <ControlCircle color="#FF5F57" active={false} onClick={closeWindow}>
          <IconClose />
        </ControlCircle>
      </WindowControls>
    </NavContainer>
  );
}
