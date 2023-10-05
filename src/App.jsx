import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Middle from './components/Middle/Middle';
import Destinations from './components/Destinatons/Destinations';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Questions from './components/Questions/Questions';
import Subscriber from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscriber />
      <Footer />
    </div>
  )
}

export default App
