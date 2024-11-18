
import './App.css';
import {Routes,Route} from 'react-router-dom'
import LoginComponent from './components/Login';
import Home from './home';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path='/login' element={<LoginComponent/>}/>
      <Route  path='/' element={<Home/>}/>

      
     </Routes>
    </div>
  );
}

export default App;
