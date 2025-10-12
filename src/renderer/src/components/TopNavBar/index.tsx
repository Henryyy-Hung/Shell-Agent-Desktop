import { useState } from 'react'
import { TabEnum, TabEnumType } from '@renderer/enums/TabEnum'
import IconPin from '@renderer/assets/vectors/IconPin'
import IconClose from '@renderer/assets/vectors/IconClose'
import IconMinimize from '@renderer/assets/vectors/IconMinimize'
import { NavContainer, TabsWrapper, Tab, WindowControls, ControlCircle } from './styles'

interface Props {
  currentTab: TabEnumType
  onTabChange: (tab: TabEnumType) => void
}

const tabTitles: Record<TabEnumType, string> = {
  [TabEnum.CHAT]: '终端助手',
  [TabEnum.SOP]: '流程资产',
  [TabEnum.SETTINGS]: '设置'
}

export default function TopNavBar({ currentTab, onTabChange }: Props) {
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false)

  const toggleAlwaysOnTop = async (): Promise<void> => {
    const currentState = (await window.api.window.toggleAlwaysOnTop()) || false
    setIsAlwaysOnTop(currentState)
  }

  const minimizeWindow = async (): Promise<void> => {
    await window.api.window.minimizeWindow()
  }

  const closeWindow = async (): Promise<void> => {
    await window.api.window.closeWindow()
  }

  return (
    <NavContainer>
      <TabsWrapper>
        {Object.values(TabEnum).map((tab) => (
          <Tab key={tab} $active={currentTab === tab} onClick={() => onTabChange(tab)}>
            {tabTitles[tab]}
          </Tab>
        ))}
      </TabsWrapper>
      <WindowControls>
        <ControlCircle color="#00AEEF" $active={isAlwaysOnTop} onClick={toggleAlwaysOnTop}>
          <IconPin />
        </ControlCircle>
        <ControlCircle color="#fbbd2e" $active={false} onClick={minimizeWindow}>
          <IconMinimize />
        </ControlCircle>
        <ControlCircle color="#FF5F57" $active={false} onClick={closeWindow}>
          <IconClose />
        </ControlCircle>
      </WindowControls>
    </NavContainer>
  )
}
