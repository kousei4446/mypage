import React, {useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import image3 from "./img/img3.jpg";
import SkillBars from './components/SkillBars';
import Product from './components/Product';
import Contact from './components/Contact';
import HumbergerLine from './components/HumbergerLine';

function Home() {
  return (
    <div className='main'>
      <div className='about' id='about'>
        <h1>About</h1>
        <div className='about_content'>
          <img src={image3} alt='dog' style={{ margin: "0px" }} height="200px" width="200px" className='dog' />
          <p className="discription" style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <nav>
        <h1>Portfolio</h1>
        <div className='navThree'>
          <Link to='/mypage'>home</Link>
          <Link to='/mypage/product'>product</Link>
          <Link to="/mypage/contact">contact</Link>
        </div>
        <div className='humberger'>
          <HumbergerLine isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
      <div className='hums' >
        {isOpen && (
          <div className='hum'>
            <Link to='/mypage' onClick={()=>{setIsOpen(false)}}>home</Link>
            <Link to='/mypage/product' onClick={()=>{setIsOpen(false)}}>product</Link>
            <Link to="/mypage/contact" onClick={()=>{setIsOpen(false)}}>contact</Link>
          </div>
        )}
      </div>
 
      <Routes>
        <Route path='/mypage' element={<Home />} />
        <Route path='/mypage/product' element={<Product />} />
        <Route path='/mypage/contact' element={<Contact />} />
      </Routes>
      <footer>
        <p>© 2024 Kudo Kousei</p>
      </footer>
    </Router>
  );
}

export default App;