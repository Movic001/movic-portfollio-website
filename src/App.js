import './App.css';
import NavBar from './components/NavBar';
import ImageCard from './components/ImageCard';
import ServiceContainer from './components/ServiceContainer';
import ClientProject from './components/ClientProject';
import Marquee from './components/marquee'
import YearExperience from './components/YearExperience';

function App() {
  return (
    <div className="conainer-fluid">
      <NavBar />
      <ImageCard />
      <Marquee />
      <ServiceContainer />
      <hr className=' container bg-success' />
      <ClientProject />
      <YearExperience />
    </div>
  );
}

export default App;
