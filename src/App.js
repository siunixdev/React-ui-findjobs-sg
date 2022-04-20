import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Search />
      <Body />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
