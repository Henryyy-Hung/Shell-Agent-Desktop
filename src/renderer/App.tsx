import './global.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TabEnum, TabEnumType } from './enums/TabEnum';
import Index from './components/TopNavBar';

const AppContainer = styled.div`
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

const AppContent = styled.div`
  flex: 1 1 0;
  padding: 16px;
  min-height: 200px;
  background-color: white;
  border-radius: 0 12px 12px 12px;
`;

// 主组件
function App() {
  const [currentTab, setCurrentTab] = useState<TabEnumType>(TabEnum.Chat);

  return (
    <AppContainer>
      <Index currentTab={currentTab} onTabChange={setCurrentTab} />
      <AppContent>
        {currentTab === TabEnum.Chat && <div>终端助手内容</div>}
        {currentTab === TabEnum.Memory && <div>流程资产内容</div>}
        {currentTab === TabEnum.Settings && <div>设置内容</div>}
      </AppContent>
    </AppContainer>
  );
}

export default App;
