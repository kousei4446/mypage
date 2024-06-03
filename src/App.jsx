import './App.css';
import image1 from "./img/img1.png"
import image2 from "./img/img2.png"
import image3 from "./img/img3.jpg"
import image4 from "./img/img4.png"
import SkillBars from './components/skillBars';


function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <nav>
        <h1>Portfolio</h1>
        <div className='navThree'>
          <a href='#about' >about</a>
          <a href='#skill'>skill</a>
          <a href='#product'>product</a>
        </div>
      </nav>
      <div className='main'>
        <div className='about' id='about'>
          <h1>About</h1>
          <div className='about_content'>
            <img src={image3} alt='dog' height="200px" width="200px" className='dog' />
            <p>こんにちは、現在Reactの勉強をしている関西の大学生です。<br />私は犬を昔飼っていて犬が大好きです。<br />大学ではボランティア部の副部長を務めています。プログラミングに興味があり、<br />特にフロントエンドに力を入れています。趣味でバスケットボールを楽しんでいます。<br />よろしくお願いします!!!</p>
          </div>
        </div>
        <div id='skill' className='skill'>
          <h1>Skill</h1>
          <SkillBars />
        </div>
        <div className='product' id='product'>
          <h1>Product</h1>
          <br />
          <div className='display'>
            <div>
              <img src={image1} alt='img1' height="280px" className='product_img' />
              <p>60秒間でどれだけタイピング入力できるかを見ることができます!!<br />
                ソースコードは
                <a href='https://github.com/githubacountf/typimg.git' target='_blank' rel="noopener noreferrer">こちら</a>
              </p>
              <h4 style={{ textAlign: "center" }}>使用技術</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <br/>
              </ul>
            </div>

            <div>
              <img src={image2} alt='img2' height="300px" className='product_img' />
              <p>英単語で遊べます
                <a href='https://mytango-66aa6.web.app' target="_blank" rel="noopener noreferrer">遊ぶ</a>
              </p>
              <h4 style={{ textAlign: "center" }}>使用技術</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <img src={image4} alt='img4' height="300px" className='product_img' />
              <p>api fetchを用いて外部のデータの取得によって作成しました
                <a href='https://github.com/githubacountf/pokemon-app.git' target="_blank" rel="noopener noreferrer">ソースコード</a>
              </p>
              <h4 style={{ textAlign: "center" }}>使用技術</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default App;
