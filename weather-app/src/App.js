import './Assets/css/App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import WeatherPanel from './Components/WeatherPanel';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WeatherPanel/>
      <Footer/>
     
    </div>
  );
}

export default App;
