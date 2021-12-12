import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Speakers from './components/Speakers';
import Portal from './components/Portal';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Speakers/>
      <Portal/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
