import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import image3 from "./img/img3.jpg";
import SkillBars from './components/SkillBars';
import Product from './components/Product';
import Contact from './components/Contact';

function Home() {
  return (
    <div className='main'>
      <div className='about' id='about'>
        <h1>About</h1>
        <div className='about_content'>
          <img src={image3} alt='dog' style={{ margin: "0px" }} height="200px" width="200px" className='dog' />
          <p style={{ width: "50%", margin: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            こんにちは、現在Reactの勉強をしている関西の大学生です。私は犬を昔飼っていて犬が大好きです。大学ではボランティア部の副部長を務めています。プログラミングに興味があり、特にフロントエンドに力を入れています。趣味でバスケットボールを楽しんでいます。よろしくお願いします!!!
          </p>
        </div>
      </div>
      <div id='skill' className='skill'>
        <h1>Skill</h1>
        <SkillBars />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <nav>
        <h1>Portfolio</h1>
        <div className='navThree'>
          <Link to='/'>home</Link>
          <Link to='/product'>product</Link>
          <Link to="/contact">contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;