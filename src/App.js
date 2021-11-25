import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './containers/HomePage/HomePage';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
