import logo from './logo.svg';
import './App.css';
import photo from './photo.png'
import Nav from './Components/Nav';
import { useState } from 'react';



function App() {

  const [nav, setnav] = useState(false)
  const shnav = (props) =>{
    setnav(props)
  }
  return (
    <div className="main">
      {nav === false ? (
    <>
        <Nav change = {shnav} />
        <i id='menu' 
        className="fa-solid fa-bars" 
        onClick={() => shnav(true)}></i>
      </>
      ): (
        <Nav change = {shnav} shown = {nav}/>
      )}
       <div className="info_container">
        <div className="main_txt">
            <h1 data-text="I'am Guga">I'am Guga</h1>
            <h2 data-glitch = "15 years old Front-end developer" className='glitch'>15 years old Front-end developer</h2>
        </div>
        <img src={photo} alt="Your photo" />
      </div>
    </div>
  );
}


export default App;
