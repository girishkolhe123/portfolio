import logo from './logo.svg';
import './App.css'; 
// import {Header} from './Header/Header';
import { Menu } from './Menu/Menu';
import { Footer } from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header/> */}
        <Menu/>
        <Footer/>
        
      </header>
    </div>
  );
}

export default App;
