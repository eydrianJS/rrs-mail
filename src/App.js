import './App.css';
import Headers from './components/Headers';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ height: '100vh', position: 'relative' }}>
      <Headers />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
