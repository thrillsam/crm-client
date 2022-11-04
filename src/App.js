import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tickets from './Tickets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <header className="App-content">
        <Tickets name='Company' />
      </header>
      <header className="App-header">
        <Footer />
      </header>
    </div>
  );
}

export default App;
