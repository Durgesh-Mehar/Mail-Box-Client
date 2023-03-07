import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Inbox from './component/pages/Inbox';
import SentBox from './component/pages/SentBox';
import LogIn from './component/UI/Login';
import SignUp from './component/UI/SignUp';
import Welcome from './component/UI/Welcome';


function App() {
  return (
    <div>
      <Header/>
     <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/inbox' element={<Inbox/>} />
        <Route path='/sentbox'  element={<SentBox/>}/>
     </Routes>
    </div>
  );
}

export default App;
