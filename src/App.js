import './App.css';
import Info from './Info.jsx';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';


function App() {
  return (
    <div className="app">
      <div className='card'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
