import './global.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FontFaceObserver from 'fontfaceobserver';
import { TabEnum, TabEnumType } from './enums/TabEnum';
import TopNavBar from './components/TopNavBar';
import ChatPage from './pages/ChatPage';
import SOPPage from './pages/SopPage';
import SettingsPage from './pages/SettingsPage';

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
  background-color: white;
  border-radius: 0 12px 12px 12px;
`;

// 主组件
function App() {
  const [currentTab, setCurrentTab] = useState<TabEnumType>(TabEnum.Chat);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadFonts = () => {
      const satoshiVariable = new FontFaceObserver('Satoshi-Variable', {
        style: 'normal',
      });
      const consolas = new FontFaceObserver('Consolas', {
        style: 'normal',
      });
      return Promise.all([satoshiVariable.load(), consolas.load()]);
    };
    // eslint-disable-next-line promise/catch-or-return
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppContainer>
      <TopNavBar currentTab={currentTab} onTabChange={setCurrentTab} />
      <AppContent>
        {currentTab === TabEnum.Chat && <ChatPage />}
        {currentTab === TabEnum.SOP && <SOPPage />}
        {currentTab === TabEnum.Settings && <SettingsPage />}
      </AppContent>
    </AppContainer>
  );
}

export default App;
