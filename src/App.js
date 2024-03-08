import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListDroneComponet from './components/ListDroneComponet';
import AddDroneComponent from './components/AddDroneComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
        <Routes>
          
        <Route exact path='/' element={<ListDroneComponet />} />
        <Route path='/drones' element={<ListDroneComponet />} />
        <Route path='/add-drone' element={<AddDroneComponent />} />
          

        </Routes>
        <FooterComponent />
      </Router>

    </div>
  );
}

export default App;
