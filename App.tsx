import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {DB} from './src/utils/database';

function App(): React.JSX.Element {
  useEffect(() => {
    // Clear old progress on app start
    DB.clearOldProgress();
  }, []);

  return <AppNavigator />;
}

export default App;
