import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import image3 from "./img/img3.jpg";
import { GitHub } from '@mui/icons-material';
import Product from './components/Product';
import Contact from './components/Contact';
import HumbergerLine from './components/HumbergerLine';
import ProductDetail from './components/ProductDetail';

function Home() {
  return (
    <div className='main'>
      <br />
      <h1 style={{ marginBottom: "0px" }}>About</h1>
      <div className='about' id='about'>
        <div className='about_content'>
          <img src={image3} alt='dog' style={{ margin: "0px" }} height="200px" width="200px" className='dog' />
          <p className="discription" style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            こんにちは、現在Reactの勉強をしている関西の大学３年です。私は犬を昔飼っていて犬が大好きです。大学ではボランティア部の副部長を務めています。プログラミングに興味があり、特にフロントエンドに力を入れています。趣味でバスケットボールを楽しんでいます。よろしくお願いします!!!
          </p>
        </div>
      </div>
      <br />
      {/* <br />
      <h1>Reserch</h1>
      <p>研究室は未定</p> */}
      <br />
      <h1>Github account</h1>
      <a href='https://github.com/kousei4446'>
        <GitHub className='git' />
      </a>
      <br />
      <br />
      <h1>InternShip</h1>
      <br />
      <div className='intern'>
        <div style={{ width: "320px", height: "450px", backgroundImage: " linear-gradient(90deg, rgba(144, 245, 154, 1), rgba(4, 202, 255, 1))", boxShadow: "11px 11px 8.6px rgba(0, 0, 0, 0.25)", padding: "10px" }}>
          <div>
            <p style={{ fontSize: "25px", marginBottom: "0px", color: "black" }}>株式会社クイック</p>
            <p style={{ color: "black", fontWeight: "bold", borderBottom: "0.5px solid" }}>2024年8月2日~2024年8月4日(3Days)</p>
          </div>
          <div>
            <p style={{ color: "black", fontSize: "18px" }}>サービス「社内のwebポータル」のフロントエンドUX改善。技術は、React+TypeScript、PHP(laravel)を使用。
              具体的に既存のシステムに質問機能を追加しました。そこで初めてバックエンドを実装しMVCモデルの概念を学び、サーバー側で質問テーブルをユーザー情報のテーブルの結合などをおこないフロントへ情報を渡す処理を記述しました。</p>
          </div>
        </div>
        <div style={{ width: "320px", height: "450px", backgroundImage: "linear-gradient(90deg, rgba(168, 202, 240, 1), rgba(233, 240, 250, 1))", boxShadow: "11px 11px 8.6px rgba(0, 0, 0, 0.25)", padding: "10px" }}>
          <div>
            <p style={{ fontSize: "25px", marginBottom: "0px", color: "black" }}>株式会社Sky</p>
            <p style={{ color: "black", fontWeight: "bold", borderBottom: "0.5px solid" }}>2024年9月2日~9月13日(予定)</p>
          </div>
          <div>
            <p style={{ color: "black", fontSize: "18px" }}>
              2週間のインターンシップを通じて最新のWeb開発のスキルを学びます。
              Sky株式会社の社内のDXに関する開発を担う「Skyスタイル部」の現場社員さんから、実際に開発現場の業務内容の理解やプログラミングスキルの向上し、
              実際の成果物の作成を目指します。
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='sample'></div>
      </div>
      <br />
      <footer>
        <p>© 2024 Kudo Kousei</p>
      </footer>
    </div >
  );
}
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mypage/product' element={<Product />} />
        <Route path='/mypage/contact' element={<Contact />} />
        <Route path="/mypage/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

const Navigation = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <nav style={{ position: "relative", zIndex: "100" }}>
        <h1>Portfolio</h1>
        <div className='navThree'>
          <Link to='/' style={currentPath.includes("product") || currentPath.includes("contact") ? {} : { color: "gray" }}>home</Link>
          <Link to='/mypage/product' style={currentPath.includes("product") ? { color: "gray" } : {}}>product</Link>
          <Link to="/mypage/contact" style={currentPath.includes("contact") ? { color: "gray" } : {}}>contact</Link>
        </div>
        <div className='humberger'>
          <HumbergerLine isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* <HamburgerMenu /> */}
        </div>
      </nav>
      <div className='hums'>
        {isOpen && (
          <div className='hum'>
            <Link to='/' onClick={() => setIsOpen(false)}>home</Link>
            <Link to='/mypage/product' onClick={() => setIsOpen(false)}>product</Link>
            <Link to="/mypage/contact" onClick={() => setIsOpen(false)} style={currentPath.includes("contact") ? { color: "rgb(126, 197, 168)" } : {}}>contact</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default App;