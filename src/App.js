// import { useState } from 'react';
import './App.css';
import ColorPalete from './components/ColorPalete';
// import Tests from './components/Tests';
// import Accordion from './components/Accordion';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  // const [mode,setMode] = useState("dark");
  return (
    <>
      {/* TextUtils Code */}
      {/* <Navbar title="TextUtils" mode={mode}/>
      
      <div className="container">
        <TextForm heading="Enter Text To Analyze Below"/>
      </div> */}

      {/* Accordion Code */}
      {/* <div className='container my-2'>
        <div className='row'>
          <div className='col-12'>
            <Accordion/>
          </div>
        </div>
      </div> */}

      {/* <Tests/> */}





      {/* Color Palete */}
      <ColorPalete/>
    </>
  );
}

export default App;
