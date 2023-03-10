import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Inbox from './component/pages/Inbox';
import SentBox from './component/pages/SentBox';
import ViewEmail from './component/pages/ViewEmail';
import LogIn from './component/UI/Login';
import SignUp from './component/UI/SignUp';
import Welcome from './component/UI/Welcome';


function App() {
  return (
    <div style={{backgroundColor:'yellowgreen'}}>
      <Header/>
     <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/inbox' element={<Inbox/>} />
        <Route path='/sentbox'  element={<SentBox/>}/>
        <Route path='/inbox/:id' element={<ViewEmail/>}/>
     </Routes>
    </div>
  );
}

export default App;
