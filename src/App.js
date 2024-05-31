import { Routes, Route } from 'react-router-dom';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Main from "./Main";
import A1_18 from './questions/A1_18';
import A3_2 from './questions/A3_2';
import A4_4 from './questions/A4_4';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/A1_18' element={<A1_18 />} />
      <Route path='/A3_2' element={<A3_2 />} />
      <Route path='/A4_4' element={<A4_4 />} />
      {/* <Route path='/Page1' element={<Page1 />} />
      <Route path='/Page2' element={<Page2 />} />
      <Route path='/Page3' element={<Page3 />} /> */}
    </Routes>
  );
}

export default App;
