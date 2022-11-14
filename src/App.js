import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import PlaygroundContainer from './containers/PlaygroundContainer';
import AuthenticationService from './services/authService';

const App = () => {

  useEffect(()=> {
    AuthenticationService.signin("richard", "fakepassword");
  }, []);

  return (
    <BrowserRouter>
    <div>
      <TopBar />
      <Routes>
        <Route path="/playground" component={PlaygroundContainer} />
      </Routes>
      <PlaygroundContainer />
    </div>

    </BrowserRouter>
  );
}

export default App;
