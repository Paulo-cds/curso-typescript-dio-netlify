import {
  ChakraProvider
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {  AppContext, AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { useContext } from 'react';

function App() {

  // !getAllLocalStorage() && createLocalStorage() 
  

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            < MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
