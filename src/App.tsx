import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Tabs from './components/Navbar/Tabs/Tabs';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import message from './components/Navbar/Tabs/message';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Tabs message={message} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
