import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './containers/HomePage/HomePage';
import RegisterUserPage from './containers/RegisterUserPage/RegisterUserPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import store from './services/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/register" element={<RegisterUserPage />}/>
            <Route path="/userProfile" element={<ProfilePage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
