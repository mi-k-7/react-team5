import { Routes, Route } from 'react-router-dom';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Main from "./Main";
import Quiz7 from './Quiz7/Quiz7';
import Quiz8 from './Quiz8/Quiz8';
import Quiz9 from './Quiz9/Quiz9';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Quiz7' element={<Quiz7 />} />
      <Route path='/Quiz8' element={<Quiz8 />} />
      <Route path='/Quiz9' element={<Quiz9 />} />

      {/* <Route path='/Page1' element={<Page1 />} />
      <Route path='/Page2' element={<Page2 />} />
      <Route path='/Page3' element={<Page3 />} /> */}
    </Routes>
  );
}

export default App;
