import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './component/pages/SignUp';
import LogIn from './component/pages/Login';
import Welcome from './component/pages/Welcome';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
     </Routes>
    </div>
  );
}

export default App;
