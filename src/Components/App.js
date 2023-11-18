
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Services from './Services';
import Form from './Form';
import Footer from './Footer';
import ScrollButton from './ScrollButton';

function App() {
  return (
      <div>
        <NavBar/>
        <ScrollButton/>
        <Header/>
        <About/>
        <Services/>
        <Form/>
        <Footer/>
      </div>
  );
}



export default App;
