import './main.css';
import { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { AppContainer, AppContent, AppHeader } from '@renderer/appStyles';
import { TabEnum, TabEnumType } from './enums/TabEnum';
import TopNavBar from './components/TopNavBar';
import ChatPage from './pages/ChatPage';
import SOPPage from './pages/SopPage';
import SettingsPage from './pages/SettingsPage';
import {Provider} from "react-redux";
import {store} from "@renderer/store";

function App() {
  const [currentTab, setCurrentTab] = useState<TabEnumType>(TabEnum.CHAT);

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
    <Provider store={store}>
      <AppContainer>
        <AppHeader
          as={TopNavBar}
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
        <AppContent>
          {currentTab === TabEnum.CHAT && <ChatPage />}
          {currentTab === TabEnum.SOP && <SOPPage />}
          {currentTab === TabEnum.SETTINGS && <SettingsPage />}
        </AppContent>
      </AppContainer>
    </Provider>
  );
}

export default App;
